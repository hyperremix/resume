import SchoolIcon from '@mui/icons-material/School';
import { Skill } from 'experiences/Skill';
import * as React from 'react';
import { TExperience } from '../TExperience';
import { MasterThesisExperience } from './MasterThesisExperience';

export const LundUniversityExperience: TExperience = {
  slug: 'lund-university',
  title: 'M.Sc. in Engineering',
  from: new Date('2009-09-01'),
  to: new Date('2014-06-01'),
  icon: <SchoolIcon />,
  roles: [{ title: 'Student' }],
  location: 'Lund University, Sweden',
  projectDescription: 'Computer Science and Engineering',
  skills: [Skill.Java],
  highlightedSkills: [Skill.Java],
  subExperiences: [MasterThesisExperience],
};
