import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import CdonIcon from '@/icons/common/cdon';
import { Skill } from '@/skill/Skill';

export const Cdon2013Experience: TExperience = {
  slug: 'cdon-2013',
  title: translations.experience.title.CDON,
  from: '2013-06-01',
  to: '2013-09-01',
  icon: <CdonIcon />,
  companyDescription: translations.experience.companyDescription.CDON,
  projectDescription: translations.experience.projectDescription.CDON2013,
  roles: [
    {
      title: translations.experience.role.developer,
      description: [translations.experience.roleDescription.CDON2013],
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
    Skill.Kanban,
  ],
};
