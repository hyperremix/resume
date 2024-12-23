import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import Airplane from '@/icons/common/airplane';
import { Skill } from '@/skill/Skill';

export const MroExperience: TExperience = {
  slug: 'mro',
  title: translations.experience.title.mro,
  from: '2018-07-01',
  to: '2020-01-01',
  icon: <Airplane />,
  companyDescription: translations.experience.companyDescription.mro,
  projectDescription: translations.experience.projectDescription.mro,
  roles: [
    {
      title: translations.experience.role.fullStackDeveloper,
      description: [translations.experience.roleDescription.mro.fullStackDeveloper],
    },
    {
      title: translations.experience.role.devOps,
      description: [translations.experience.roleDescription.mro.devOps],
    },
  ],
  highlightedSkills: [Skill.Kotlin, Skill.VertX, Skill.TypeScript, Skill.Angular, Skill.Kubernetes],
  skills: [
    Skill.Java,
    Skill.Kotlin,
    Skill.VertX,
    Skill.TypeScript,
    Skill.SASS,
    Skill.Angular,
    Skill.Go,
    Skill.Helm,
    Skill.Kubernetes,
    Skill.Docker,
    Skill.Cypress,
    Skill.Jenkins,
    Skill.Kibana,
    Skill.Grafana,
    Skill.Prometheus,
    Skill.Scrum,
    Skill.UnitTesting,
    Skill.E2ETesting,
    Skill.Keycloak,
    Skill.OpenShift,
  ],
};
