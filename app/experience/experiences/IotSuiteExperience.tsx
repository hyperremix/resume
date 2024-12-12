import RouterWireless from '@/icons/common/router-wireless.svg?react';
import { Skill } from '@/skill/Skill';
import { TExperience } from '../TExperience';

export const IotSuiteExperience: TExperience = {
  slug: 'iot-suite',
  title: 'IoT Suite for Smart Heating',
  from: new Date('2022-11-01'),
  to: new Date('2024-06-12'),
  icon: <RouterWireless />,
  companyDescription:
    'Startup that wants to make real estate climate-friendly, comfortable and economical: To achieve this they digitise and network buildings on behalf of their customers and develop new, intelligent products. They offer efficient, customised workflows and applications for operating IoT infrastructures, and have created a flexible enterprise IoT suite that manages data from many millions of sensors for intelligent applications and services.',
  projectDescription:
    'Digitilization of the real estate industry through an IoT suite that makes heating climate-friendly, comfortable and economical for both tenants and landlords.',
  roles: [
    {
      title: 'Product Owner',
      description: [
        'Fredrik was responsible for conceptualizing, scoping, and planning new features for the customer portal in close collaboration with management, other Product Owners, and his team. In this fast-paced environment, it was essential to provide management and other POs with estimates, risk evaluations, and potential opportunities to support the development of related products. Fredrik also took on the task of translating external requirements into user stories for the development team to work on.',
      ],
    },
    {
      title: 'Tech / Team Lead',
      description: [
        "Fredrik's primary responsibility as a tech lead was to support and enable the team and each developer to perform and deliver at a high level. The role also involved close collaboration with the Product Owner during the conception phase and ensuring clear communication of expectations to the development team, as well as providing realistic evaluations to the product department and management. Additionally, Fredrik was responsible for ensuring that while product goals were met, tech debt remained low, and we addressed technical excellence topics such as disaster recovery, observability, and metrics.",
      ],
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
  ],
};
