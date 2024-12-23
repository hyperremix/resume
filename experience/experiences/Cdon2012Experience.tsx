import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import CdonIcon from '@/icons/common/cdon';
import { Skill } from '@/skill/Skill';

export const Cdon2012Experience: TExperience = {
  slug: 'cdon-2012',
  title: translations.experience.title.CDON,
  from: '2012-06-01',
  to: '2012-09-01',
  icon: <CdonIcon />,
  companyDescription: translations.experience.companyDescription.CDON,
  projectDescription: translations.experience.projectDescription.CDON2012,
  roles: [
    {
      title: translations.experience.role.developer,
      description: [translations.experience.roleDescription.CDON2012],
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
