import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import ParentalLeave from '@/icons/common/parental-leave';

export const ParentalLeaveExperience: TExperience = {
  slug: 'parental-leave',
  title: translations.experience.title.parentalLeave,
  from: '2024-06-01',
  to: '2024-10-01',
  icon: <ParentalLeave />,
};
