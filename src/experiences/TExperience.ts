import { Skill } from 'experiences/Skill';
import { ReactNode } from 'react';

export type TExperience = {
  title: string;
  icon?: ReactNode;
  from: Date;
  to?: Date;
  location?: string;
  role?: string;
  companyDescription?: string;
  projectDescription?: string;
  roleDescription?: string[];
  skills?: Skill[];
  subExperiences?: TExperience[];
};
// typography:
//   typographySize === 'pdf'
//     ? {
//         h4: {
//           fontSize: 18,
//           lineHeight: 1.22,
//           letterSpacing: 0.1176,
//         },
//         h6: {
//           fontSize: 12,
//           lineHeight: 1.16,
//           letterSpacing: 0.12,
//         },
//         caption: {
//           fontSize: 10,
//           lineHeight: 1.2,
//           letterSpacing: 0.53328,
//         },
//         body1: {
//           fontSize: 10,
//           lineHeight: 1.2,
//           letterSpacing: 0.15008,
//         },
//       }
//     : {},
