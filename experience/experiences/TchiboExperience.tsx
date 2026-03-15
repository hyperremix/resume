import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import Tchibo from '@/icons/common/tchibo';
import { Skill } from '@/skill/Skill';

export const TchiboExperience: TExperience = {
  slug: 'tchibo',
  title: translations.experience.title.tchibo,
  from: '2025-05-01',
  icon: <Tchibo />,
  roles: [{ title: translations.experience.role.headOfEngineering }],
  companyDescription: translations.experience.companyDescription.tchibo,
  projectDescription: translations.experience.projectDescription.tchibo,
  skills: [Skill.CoachingAndMentoring, Skill.Hiring],
};
