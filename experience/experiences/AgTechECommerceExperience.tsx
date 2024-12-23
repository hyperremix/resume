import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import Tractor from '@/icons/common/tractor';
import { Skill } from '@/skill/Skill';

export const AgTechECommerceExperience: TExperience = {
  slug: 'ag-tech',
  title: translations.experience.title.agTech,
  from: '2021-04-01',
  to: '2022-11-01',
  icon: <Tractor />,
  companyDescription: translations.experience.companyDescription.agTech,
  projectDescription: translations.experience.projectDescription.agTech,
  roles: [
    {
      title: translations.experience.role.engineeringManager,
      description: [translations.experience.roleDescription.agTech],
    },
  ],
  highlightedSkills: [Skill.React, Skill.Expo, Skill.NestJS, Skill.AWSDynamoDB, Skill.AWSLambda],
  skills: [
    Skill.TypeScript,
    Skill.React,
    Skill.ReactNative,
    Skill.HTML,
    Skill.Expo,
    Skill.NestJS,
    Skill.Docker,
    Skill.MongoDB,
    Skill.ServerlessFramework,
    Skill.AWSLambda,
    Skill.AWSAmplify,
    Skill.AWSS3,
    Skill.AWSDynamoDB,
    Skill.GitHubActions,
    Skill.Auth0,
    Skill.Sentry,
    Skill.Datadog,
    Skill.Cypress,
    Skill.Scrum,
    Skill.Hiring,
    Skill.CoachingAndMentoring,
    Skill.UnitTesting,
    Skill.IntegrationTesting,
    Skill.E2ETesting,
  ],
};
