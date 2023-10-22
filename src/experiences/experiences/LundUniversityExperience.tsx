import SchoolIcon from '@mui/icons-material/School';
import { Skill } from 'experiences/Skill';
import * as React from 'react';
import { TExperience } from '../TExperience';
import { MasterThesisExperience } from './MasterThesisExperience';

export const LundUniversityExperience: TExperience = {
  title: 'M.Sc. Computer Science',
  from: new Date('2009-09-01'),
  to: new Date('2014-06-01'),
  icon: <SchoolIcon />,
  location: 'Lund University, Sweden',
  skills: [Skill.Java],
  subExperiences: [MasterThesisExperience],
};
