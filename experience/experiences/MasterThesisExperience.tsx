import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import Axis from '@/icons/common/axis';
import { Skill } from '@/skill/Skill';

export const MasterThesisExperience: TExperience = {
  slug: 'master-thesis',
  title: translations.experience.title.axis,
  from: '2014-01-01',
  to: '2014-07-01',
  icon: <Axis />,
  companyDescription: translations.experience.companyDescription.axis,
  projectDescription: translations.experience.projectDescription.axis,
  roles: [
    {
      title: translations.experience.role.masterThesisStudent,
      description: [
        translations.experience.roleDescription.axis[0],
        translations.experience.roleDescription.axis[1],
      ],
    },
  ],
  skills: [Skill.Go],
  highlightedSkills: [Skill.Go],
};
