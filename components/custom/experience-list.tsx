import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { experiences as allExperiences, getMonthsBetween } from '@/experience';
import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import { cn } from '@/lib/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Link, useLocation } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useRef, useState, useSyncExternalStore } from 'react';
import { useLocale, useTranslations } from 'use-intl';
import { ExperienceBody } from './experience-body';
import { experienceUsesSkill, useHighlight } from './highlight';
import { Duration, MonthRange } from './period';

type Props = {
  experiences: TExperience[];
  nested?: boolean;
};

// Each row carries a miniature of the whole career: the track runs from the first entry to today,
// the filled part sits where that position falls on it
const careerStart = allExperiences
  .flatMap((experience) => [experience, ...(experience.subExperiences ?? [])])
  .map((experience) => experience.from)
  .sort()[0];
const careerMonths = getMonthsBetween(careerStart);
const careerSpan = ({ from, to }: TExperience) => ({
  left: `${(getMonthsBetween(careerStart, from) / careerMonths) * 100}%`,
  width: `${(getMonthsBetween(from, to) / careerMonths) * 100}%`,
});

export const ExperienceList = ({ experiences, nested = false }: Props) => {
  const [open, setOpen] = useState<string[]>([]);

  return (
    <Accordion
      type="multiple"
      value={open}
      onValueChange={setOpen}
      className={cn(
        nested ? 'mt-4 border-l border-rule pl-5 sm:ml-12 sm:pl-6' : 'border-t border-rule',
      )}
    >
      {experiences.map((experience) => (
        <ExperienceItem
          key={experience.slug}
          experience={experience}
          nested={nested}
          open={open.includes(experience.slug)}
        />
      ))}
    </Accordion>
  );
};

const hasDetails = ({ companyDescription, roles, skills }: TExperience) =>
  Boolean(companyDescription || skills?.length || roles?.some((role) => role.description?.length));

// The URL hash is not part of the server render, so anything keyed on it waits for the client
const useIsClient = () =>
  useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

const ExperienceItem = ({
  experience,
  nested,
  open,
}: {
  experience: TExperience;
  nested: boolean;
  open: boolean;
}) => {
  const t = useTranslations();
  const locale = useLocale();
  const { hash } = useLocation();
  const isClient = useIsClient();
  const reduceMotion = useReducedMotion();
  const { activeSkill, hoverExperience } = useHighlight();
  const itemRef = useRef<HTMLDivElement>(null);
  const { slug, title, icon, roles, from, to, projectDescription, subExperiences } = experience;
  const expandable = hasDetails(experience);
  // Arrived here through a deep link, for example the back link on the experience's own page
  const landed = isClient && hash === slug;
  const dimmed = activeSkill !== null && !experienceUsesSkill(experience, activeSkill);
  const dimClass = cn('transition-opacity duration-300', dimmed && 'opacity-35');

  // Once the content has grown, make sure it is actually on screen
  const revealOpened = () => {
    if (!open) return;
    itemRef.current?.scrollIntoView({
      block: 'nearest',
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  const heading = (
    <span className="flex min-w-0 flex-1 items-center gap-3">
      {icon && (
        <span aria-hidden className="flex size-9 shrink-0 items-center justify-center text-4xl">
          {icon}
        </span>
      )}
      <span className="min-w-0">
        <span
          className={cn(
            'block font-serif leading-tight group-hover:underline group-hover:decoration-rule group-hover:underline-offset-4',
            nested ? 'text-lg' : 'text-xl sm:text-2xl',
          )}
        >
          {t(title)}
        </span>
        {roles && (
          <span className="mt-0.5 block font-sans text-sm text-muted">
            {roles.map((role) => t(role.title)).join(', ')}
          </span>
        )}
      </span>
    </span>
  );

  return (
    <AccordionItem
      ref={itemRef}
      value={slug}
      id={slug}
      className={cn('relative isolate scroll-mt-20', nested && 'last:border-b-0')}
    >
      {landed && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -inset-x-3 -z-10 rounded-[3px] bg-accent-soft"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
      )}
      <div
        className={cn('sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-x-6', nested ? 'py-3.5' : 'py-6')}
      >
        <p
          className={cn(
            'mb-2 font-sans text-sm text-muted tabular-nums sm:mb-0 sm:pt-1.5',
            dimClass,
          )}
        >
          <MonthRange from={from} to={to} />
          <span className="sm:hidden">, </span>
          <span className="sm:mt-0.5 sm:block">
            <Duration from={from} to={to} />
          </span>
          <span aria-hidden className="relative mt-2 block h-[3px] rounded-full bg-rule/50">
            <span
              className={cn(
                'absolute inset-y-0 min-w-[3px] rounded-full',
                to ? 'bg-muted/70' : 'bg-accent',
              )}
              style={careerSpan(experience)}
            />
          </span>
        </p>
        <div className="min-w-0">
          <div
            className={dimClass}
            onMouseEnter={() => hoverExperience(experience)}
            onMouseLeave={() => hoverExperience(null)}
          >
            {expandable ? (
              <AccordionTrigger className="w-full py-0">{heading}</AccordionTrigger>
            ) : (
              heading
            )}
            {/* Icon (2.25rem) plus gap (0.75rem): everything below lines up with the title */}
            <div className={cn(icon && 'sm:pl-12')}>
              {/* Employer chapters show their summary up front; nested projects keep it for the expanded view so the list stays scannable */}
              {projectDescription && !nested && (
                <p className="mt-3 max-w-prose">{t(projectDescription)}</p>
              )}
              {expandable && (
                <AnimatePresence initial={false}>
                  {open && (
                    <AccordionPrimitive.Content forceMount asChild>
                      <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        onAnimationComplete={revealOpened}
                      >
                        <div className="pt-5 pb-2">
                          {projectDescription && nested && (
                            <p className="mb-6 max-w-prose">{t(projectDescription)}</p>
                          )}
                          <ExperienceBody experience={experience} roleHeading="h4" />
                          <Link
                            to="/$locale/experiences/$slug"
                            params={{ locale, slug }}
                            className="mt-6 inline-flex items-center gap-1 font-sans text-sm text-muted hover:text-ink"
                          >
                            {t(translations.experience.openPage)}
                            <ArrowUpRight aria-hidden className="size-4" />
                          </Link>
                        </div>
                      </motion.div>
                    </AccordionPrimitive.Content>
                  )}
                </AnimatePresence>
              )}
            </div>
          </div>
          {subExperiences && <ExperienceList experiences={subExperiences} nested />}
        </div>
      </div>
    </AccordionItem>
  );
};
