import { TExperience } from '@/experience/TExperience';
import CdonIcon from '@/icons/common/cdon';
import { Skill } from '@/skill/Skill';

export const Cdon2012Experience: TExperience = {
  slug: 'cdon-2012',
  title: 'CDON',
  from: '2012-06-01',
  to: '2012-09-01',
  icon: <CdonIcon />,
  companyDescription:
    'CDON is one of the leading E-commerce companies in Scandinavia with over two million active customers. They sell movies, music, games, books and electronics among many other things.',
  projectDescription: '.NET WebForms migration to .NET MVC',
  roles: [
    {
      title: 'Developer',
      description: [
        'During the summer of 2012, Fredrik was hired by CDON to help migrate their legacy code, which was written with .NET WebForms, to .NET MVC. More specifically, the project included the register page, edit user page, recover password page, etc. The assignment was an important step towards the modernization of the website. Also, as .NET MVC is highly testable, the new implementation offered better testability and maintainability of the code base.',
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
