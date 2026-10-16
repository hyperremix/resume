import { getAllSkills, getMonthsWithSkill, getSortedSkills, topSkills } from '@/experience';
import { translations } from '@/i18n';
import { cn } from '@/lib/utils';
import { Skill } from '@/skill/Skill';
import { SkillCategory } from '@/skill/SkillCategory';
import { skillConfig } from '@/skill/skillConfig';
import { useTranslations } from 'use-intl';
import { experienceUsesSkill, useHighlight } from './highlight';

const monthsBySkill = new Map(getSortedSkills().map(({ skill, months }) => [skill, months]));

// Every skill from every experience, grouped by category, most experienced first within a group
const skillsByCategory = Object.values(SkillCategory)
  .map((category) => ({
    category,
    skills: getAllSkills()
      .filter((skill) => skillConfig[skill].category === category)
      .sort((a, b) => (monthsBySkill.get(b) ?? 0) - (monthsBySkill.get(a) ?? 0)),
  }))
  .filter(({ skills }) => skills.length > 0);

export const SkillsSection = () => {
  const t = useTranslations();
  const { pinnedSkill, clear } = useHighlight();

  return (
    <section aria-labelledby="skills">
      <h2 id="skills" className="font-serif text-3xl leading-tight sm:text-4xl">
        {t(translations.skillsHeader)}
      </h2>
      <p className="mt-3 max-w-prose text-muted" aria-live="polite">
        {pinnedSkill ? (
          <>
            {t(translations.home.skillFilter, { skill: pinnedSkill })}{' '}
            <button
              type="button"
              onClick={clear}
              className="underline decoration-rule underline-offset-4 hover:text-ink"
            >
              {t(translations.home.clearFilter)}
            </button>
          </>
        ) : (
          t(translations.home.skillsLead)
        )}
      </p>

      <h3 className="mt-10 font-serif text-xl">{t(translations.home.topSkillsHeader)}</h3>
      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4">
        {topSkills.map((skill) => (
          <li key={skill}>
            <TopSkillButton skill={skill} />
          </li>
        ))}
      </ul>

      <h3 className="mt-14 font-serif text-xl">{t(translations.home.allSkillsHeader)}</h3>
      <dl className="mt-5 border-t border-rule">
        {skillsByCategory.map(({ category, skills }) => (
          <div
            key={category}
            className="border-b border-rule py-3 sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-x-6"
          >
            <dt className="mb-1 font-sans text-sm text-muted sm:mb-0 sm:pt-1.5">
              {t(translations.skillCategory[category])}
            </dt>
            <dd className="-ml-2 flex flex-wrap gap-1">
              {skills.map((skill) => (
                <SkillButton key={skill} skill={skill} />
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

const useSkillState = (skill: Skill) => {
  const { activeSkill, hoveredExperience, skillProps } = useHighlight();
  return {
    active: activeSkill === skill,
    lit: hoveredExperience ? experienceUsesSkill(hoveredExperience, skill) : false,
    props: skillProps(skill),
  };
};

const buttonStyle = (active: boolean, lit: boolean) =>
  cn(
    'rounded-[3px] border text-left font-sans transition-colors',
    active
      ? 'border-accent bg-accent-soft'
      : lit
        ? 'border-transparent bg-accent-soft'
        : 'border-transparent hover:border-rule',
  );

const SkillButton = ({ skill }: { skill: Skill }) => {
  const { active, lit, props } = useSkillState(skill);
  const { icon } = skillConfig[skill];

  return (
    <button
      type="button"
      {...props}
      className={cn('inline-flex items-center gap-1.5 px-2 py-1 text-sm', buttonStyle(active, lit))}
    >
      {icon && (
        <span aria-hidden className="flex text-[1.1em]">
          {icon}
        </span>
      )}
      {skill}
    </button>
  );
};

const TopSkillButton = ({ skill }: { skill: Skill }) => {
  const t = useTranslations();
  const { active, lit, props } = useSkillState(skill);
  const { icon } = skillConfig[skill];
  const years = Math.round(getMonthsWithSkill(skill) / 12);

  return (
    <button
      type="button"
      {...props}
      className={cn(
        '-mx-2 flex w-[calc(100%+1rem)] items-center gap-3 px-2 py-2',
        buttonStyle(active, lit),
      )}
    >
      {icon && (
        <span aria-hidden className="flex shrink-0 text-2xl">
          {icon}
        </span>
      )}
      <span className="leading-tight">
        <span className="block text-[15px]">{skill}</span>
        <span className="block text-sm text-muted">{t(translations.skillYears, { years })}</span>
      </span>
    </button>
  );
};
