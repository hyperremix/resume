import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import RouterWireless from '@/icons/common/router-wireless';
import { Skill } from '@/skill/Skill';

export const IotSuiteExperience: TExperience = {
  slug: 'iot-suite',
  title: translations.experience.title.iotSuite,
  from: '2022-11-01',
  to: '2024-06-12',
  icon: <RouterWireless />,
  companyDescription: translations.experience.companyDescription.iotSuite,
  projectDescription: translations.experience.projectDescription.iotSuite,
  roles: [
    {
      title: translations.experience.role.productOwner,
      description: [translations.experience.roleDescription.iotSuite.productOwner],
    },
    {
      title: translations.experience.role.teamTechLead,
      description: [translations.experience.roleDescription.iotSuite.teamTechLead],
    },
  ],
  highlightedSkills: [
    Skill.Kotlin,
    Skill.SpringBoot,
    Skill.TypeScript,
    Skill.Vue,
    Skill.PostgreSQL,
    Skill.Kafka,
    Skill.Kubernetes,
  ],
  skills: [
    Skill.Kotlin,
    Skill.SpringBoot,
    Skill.PostgreSQL,
    Skill.Kafka,
    Skill.TypeScript,
    Skill.Vue,
    Skill.Vite,
    Skill.Kubernetes,
    Skill.Helm,
    Skill.AWSLambda,
    Skill.AWSCognito,
    Skill.Docker,
    Skill.GitLabCI,
    Skill.Kibana,
    Skill.Grafana,
    Skill.Prometheus,
    Skill.SASS,
    Skill.Kanban,
    Skill.Scrum,
    Skill.UnitTesting,
    Skill.IntegrationTesting,
    Skill.E2ETesting,
    Skill.Hiring,
    Skill.CoachingAndMentoring,
    Skill.Playwright,
  ],
};
