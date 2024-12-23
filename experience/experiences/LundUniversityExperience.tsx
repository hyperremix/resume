import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import LundUniversity from '@/icons/common/lund-university';
import { Skill } from '@/skill/Skill';
import { MasterThesisExperience } from './MasterThesisExperience';

export const LundUniversityExperience: TExperience = {
  slug: 'lund-university',
  title: translations.experience.title.university,
  from: '2009-09-01',
  to: '2014-06-01',
  icon: <LundUniversity />,
  roles: [{ title: translations.experience.role.student }],
  projectDescription: translations.experience.projectDescription.university,
  skills: [Skill.Java],
  highlightedSkills: [Skill.Java],
  subExperiences: [MasterThesisExperience],
};
