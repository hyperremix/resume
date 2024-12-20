import { Skill } from '@/skill/Skill';
import { ReactNode } from 'react';
import { ExperienceSlug } from './ExperienceSlug';
import { TRole } from './TRole';

export type TExperience = {
  slug: ExperienceSlug;
  title: string;
  icon?: ReactNode;
  from: Date;
  to?: Date;
  location?: string;
  roles?: TRole[];
  companyDescription?: string;
  projectDescription?: string;
  highlightedSkills?: Skill[];
  skills?: Skill[];
  subExperiences?: TExperience[];
};
