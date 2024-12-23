import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import Van from '@/icons/common/van';
import { Skill } from '@/skill/Skill';

export const RideSharingExperience: TExperience = {
  slug: 'ride-sharing',
  title: translations.experience.title.rideSharing,
  from: '2024-10-22',
  icon: <Van />,
  companyDescription: translations.experience.companyDescription.rideSharing,
  projectDescription: translations.experience.projectDescription.rideSharing,
  roles: [
    {
      title: translations.experience.role.fullStackDeveloper,
      description: [translations.experience.roleDescription.rideSharing],
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
