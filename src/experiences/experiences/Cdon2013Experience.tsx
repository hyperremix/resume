import { CdonIcon } from 'app/icons/CdonIcon';
import { Skill } from 'experiences/Skill';
import * as React from 'react';
import { TExperience } from '../TExperience';

export const Cdon2013Experience: TExperience = {
  slug: 'cdon-2013',
  title: 'CDON',
  from: new Date('2013-06-01'),
  to: new Date('2013-09-01'),
  icon: <CdonIcon />,
  companyDescription:
    'CDON is one of the leading E-commerce companies in Scandinavia with over two million active customers. They sell movies, music, games, books and electronics among many other things.',
  projectDescription: 'Introduction of the subscription based membership CDON+',
  roles: [
    {
      title: 'Developer',
      description: [
        'During the summer of 2013, Fredrik was part of the development team bringing the feature CDON+ to the website. CDON+ is a paid membership that gives customers free shipping on every purchase above SEK 100 and a way to collect points that are translated into a gift card at the end of a year. Fredrik was involved in all parts of the project, including planning, database design, business logic implementation as well as GUI design.',
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
    Skill.Kanban,
  ],
};
