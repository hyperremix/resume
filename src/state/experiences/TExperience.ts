import { ReactNode } from 'react';
import { Skill } from 'types/Skill';

export type TExperience = {
  title: string;
  icon?: ReactNode;
  from: Date;
  to?: Date;
  location?: string;
  role?: string;
  companyDescription?: string;
  projectDescription?: string;
  roleDescription?: ReactNode;
  skills?: Skill[];
  subExperiences?: TExperience[];
};
