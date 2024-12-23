import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import Dice from '@/icons/common/dice';
import { Skill } from '@/skill/Skill';

export const GamblingExperience: TExperience = {
  slug: 'gambling',
  title: translations.experience.title.gambling,
  from: '2020-01-01',
  to: '2021-04-01',
  icon: <Dice />,
  companyDescription: translations.experience.companyDescription.gambling,
  projectDescription: translations.experience.projectDescription.gambling,
  roles: [
    {
      title: translations.experience.role.techLeadFullStackDeveloper,
      description: [translations.experience.roleDescription.gambling],
    },
  ],
  highlightedSkills: [Skill.Kotlin, Skill.SpringBoot, Skill.TypeScript, Skill.Angular],
  skills: [
    Skill.Java,
    Skill.Kotlin,
    Skill.SpringBoot,
    Skill.TypeScript,
    Skill.Angular,
    Skill.SASS,
    Skill.NestJS,
    Skill.Jenkins,
    Skill.Splunk,
    Skill.Datadog,
    Skill.Sentry,
    Skill.Kanban,
    Skill.UnitTesting,
    Skill.IntegrationTesting,
    Skill.E2ETesting,
  ],
};
