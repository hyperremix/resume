import { Skill } from 'experiences/Skill';
import { ReactNode } from 'react';
import { ExperienceSlug } from './ExperienceSlug';

export type TExperience = {
  slug: ExperienceSlug;
  title: string;
  icon?: ReactNode;
  from: Date;
  to?: Date;
  location?: string;
  role?: string;
  companyDescription?: string;
  projectDescription?: string;
  roleDescription?: string[];
  highlightedSkills?: Skill[];
  skills?: Skill[];
  subExperiences?: TExperience[];
};
