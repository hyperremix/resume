import Van from '@/icons/common/van.svg?react';
import { Skill } from '@/skill/Skill';
import { TExperience } from '../TExperience';

export const RideSharingExperience: TExperience = {
  slug: 'ride-sharing',
  title: 'Ride Sharing',
  from: new Date('2024-10-22'),
  icon: <Van />,
  companyDescription:
    'An innovative, growing company, that stands for mobility and community. It has the higher objective of making our cities a better place to live in. They are already on the move with fully electric ride-sharing vehicles for more than two million people.',
  projectDescription:
    'Implementation of multi-tenant capabilities in the user module, which handles registration, login, and profile management, while ensuring core functionalities remain intact in the live system.',
  roles: [
    {
      title: 'Engineer and Advisor',
      description: [
        'While being part of the regular development process, Fredrik also supported the team by advising and coaching on observability, test automation and continuous delivery.',
      ],
    },
  ],
  highlightedSkills: [
    Skill.Kotlin,
    Skill.TypeScript,
    Skill.React,
    Skill.GRPC,
    Skill.AWSDynamoDB,
    Skill.AWSKinesis,
    Skill.Kubernetes,
  ],
  skills: [
    Skill.Kotlin,
    Skill.TypeScript,
    Skill.React,
    Skill.GRPC,
    Skill.Protobuf,
    Skill.AWSDynamoDB,
    Skill.AWSKinesis,
    Skill.AWSSQS,
    Skill.AWSCognito,
    Skill.Kubernetes,
    Skill.Helm,
    Skill.AWSLambda,
    Skill.Docker,
    Skill.GitHubActions,
    Skill.Kibana,
    Skill.Grafana,
    Skill.Prometheus,
    Skill.Kanban,
    Skill.UnitTesting,
    Skill.IntegrationTesting,
  ],
};
