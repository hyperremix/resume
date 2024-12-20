import { TExperience } from '@/experience/TExperience';
import LundUniversity from '@/icons/common/lund-university';
import { Skill } from '@/skill/Skill';
import { MasterThesisExperience } from './MasterThesisExperience';

export const LundUniversityExperience: TExperience = {
  slug: 'lund-university',
  title: 'M.Sc. in Engineering',
  from: new Date('2009-09-01'),
  to: new Date('2014-06-01'),
  icon: <LundUniversity />,
  roles: [{ title: 'Student' }],
  location: 'Lund University, Sweden',
  projectDescription: 'Computer Science and Engineering',
  skills: [Skill.Java],
  highlightedSkills: [Skill.Java],
  subExperiences: [MasterThesisExperience],
};
