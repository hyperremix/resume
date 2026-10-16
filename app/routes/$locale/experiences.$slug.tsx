import { ExperienceBody } from '@/components/custom/experience-body';
import { MonthRange, PeriodDetail } from '@/components/custom/period';
import { SiteFooter } from '@/components/custom/site-footer';
import { SiteHeader } from '@/components/custom/site-header';
import { experiences } from '@/experience';
import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { useLocale, useTranslations } from 'use-intl';

export const Route = createFileRoute('/$locale/experiences/$slug')({
  component: Experience,
});

function Experience() {
  const { slug: experienceSlug } = Route.useParams();
  const experience = experiences
    .flatMap((experience) => [experience, ...(experience.subExperiences ?? [])])
    .find(({ slug }) => slug === experienceSlug);

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SiteHeader />
      <main className="max-w-prose py-8 sm:py-12">
        {experience ? <ExperienceContent experience={experience} /> : <ExperienceNotFound />}
      </main>
      <SiteFooter />
    </div>
  );
}

const BackLink = ({ hash }: { hash?: string }) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Link
      to="/$locale"
      params={{ locale }}
      hash={hash}
      className="inline-flex items-center gap-1.5 font-sans text-sm text-muted hover:text-ink touch:min-h-11"
    >
      <ArrowLeft aria-hidden className="size-4" />
      {t(translations.experience.homeLinkLabel)}
    </Link>
  );
};

const ExperienceContent = ({ experience }: { experience: TExperience }) => {
  const t = useTranslations();
  const locale = useLocale();
  const { slug, title, icon, roles, from, to, location, projectDescription, subExperiences } =
    experience;

  return (
    <article>
      <BackLink hash={slug} />
      <p className="mt-10 font-sans text-sm text-muted tabular-nums">
        <PeriodDetail from={from} to={to} />
        {location && `, ${location}`}
      </p>
      <h1 className="mt-2 flex items-start gap-3 font-serif text-4xl leading-[1.1] sm:text-5xl">
        {icon && (
          <span aria-hidden className="mt-1.5 flex shrink-0 text-[0.8em]">
            {icon}
          </span>
        )}
        {t(title)}
      </h1>
      {roles && (
        <p className="mt-3 font-sans text-muted">{roles.map((role) => t(role.title)).join(', ')}</p>
      )}
      {projectDescription && <p className="mt-8 text-xl leading-snug">{t(projectDescription)}</p>}
      <div className="mt-8">
        <ExperienceBody experience={experience} roleHeading="h2" />
      </div>
      {subExperiences && (
        <section className="mt-14">
          <h2 className="font-serif text-2xl">{t(translations.experience.projectsHeader)}</h2>
          <ul className="mt-4 border-t border-rule">
            {subExperiences.map((sub) => (
              <li key={sub.slug} className="border-b border-rule">
                <Link
                  to="/$locale/experiences/$slug"
                  params={{ locale, slug: sub.slug }}
                  className="group flex items-baseline gap-5 py-3"
                >
                  <span className="w-[8.5rem] shrink-0 font-sans text-sm text-muted tabular-nums">
                    <MonthRange from={sub.from} to={sub.to} />
                  </span>
                  <span className="group-hover:underline group-hover:decoration-rule group-hover:underline-offset-4">
                    {t(sub.title)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
};

const ExperienceNotFound = () => {
  const t = useTranslations();

  return (
    <>
      <BackLink />
      <p className="mt-10 text-lg">{t(translations.experience.notFound)}</p>
    </>
  );
};
