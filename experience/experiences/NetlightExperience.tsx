import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import Netlight from '@/icons/common/netlight';
import { Skill } from '@/skill/Skill';
import { AgTechECommerceExperience } from './AgTechECommerceExperience';
import { GamblingExperience } from './GamblingExperience';
import { GlassesRetailerExperience } from './GlassesRetailerExperience';
import { IotSuiteExperience } from './IotSuiteExperience';
import { MroExperience } from './MroExperience';
import { ParentalLeaveExperience } from './ParentalLeaveExperience';
import { RideSharingExperience } from './RideSharingExperience';

export const NetlightExperience: TExperience = {
  slug: 'netlight',
  title: translations.experience.title.netlight,
  from: '2016-04-01',
  icon: <Netlight />,
  roles: [{ title: translations.experience.role.consultantManager }],
  companyDescription: translations.experience.companyDescription.netlight,
  projectDescription: translations.experience.projectDescription.netlight,
  subExperiences: [
    RideSharingExperience,
    ParentalLeaveExperience,
    IotSuiteExperience,
    AgTechECommerceExperience,
    GamblingExperience,
    MroExperience,
    GlassesRetailerExperience,
  ],
  skills: [Skill.CoachingAndMentoring, Skill.Hiring],
};
