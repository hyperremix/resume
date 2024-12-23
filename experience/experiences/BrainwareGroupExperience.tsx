import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import BrainwareGroup from '@/icons/common/brainwaregroup';
import { Skill } from '@/skill/Skill';

export const BrainwareGroupExperience: TExperience = {
  slug: 'brainwaregroup',
  title: translations.experience.title.brainware,
  from: '2014-09-01',
  to: '2016-04-01',
  icon: <BrainwareGroup />,
  companyDescription: translations.experience.companyDescription.brainware,
  projectDescription: translations.experience.projectDescription.brainware,
  roles: [
    {
      title: translations.experience.role.developer,
      description: [
        translations.experience.roleDescription.brainware[0],
        translations.experience.roleDescription.brainware[1],
        translations.experience.roleDescription.brainware[2],
        translations.experience.roleDescription.brainware[3],
      ],
    },
  ],
  highlightedSkills: [Skill.CSharp, Skill.DotNetFramework, Skill.SQLServer],
  skills: [
    Skill.CSharp,
    Skill.HTML,
    Skill.CSS,
    Skill.JavaScript,
    Skill.DotNetFramework,
    Skill.SQLServer,
  ],
};
