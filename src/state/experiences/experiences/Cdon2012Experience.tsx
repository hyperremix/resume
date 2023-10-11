import { Typography } from '@mui/material';
import { CdonIcon } from 'app/icons/CdonIcon';
import * as React from 'react';
import { Skill } from 'types/Skill';
import { TExperience } from '../TExperience';

export const Cdon2012Experience: TExperience = {
  title: 'CDON',
  from: new Date('2012-06-01'),
  to: new Date('2012-09-01'),
  icon: <CdonIcon />,
  role: 'Developer',
  companyDescription:
    'CDON is one of the leading E-commerce companies in Scandinavia with over two million active customers. They sell movies, music, games, books and electronics among many other things.',
  projectDescription: '.NET WebForms migration to .NET MVC',
  roleDescription: (
    <Typography>
      During the summer of 2012, Fredrik was hired by CDON to help migrate their legacy code, which
      was written with .NET WebForms, to .NET MVC. More specifically, the project included the
      register page, edit user page, recover password page, etc. The assignment was an important
      step towards the modernization of the website. Also, as .NET MVC is highly testable, the new
      implementation offered better testability and maintainability of the code base.
    </Typography>
  ),
  skills: [
    Skill.CSharp,
    Skill.HTML,
    Skill.CSS,
    Skill.JavaScript,
    Skill.DotNetFramework,
    Skill.SQLServer,
  ],
};
