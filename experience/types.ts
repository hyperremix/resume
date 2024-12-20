import { Skill } from '@/skill/Skill';
import { TExperience } from './TExperience';

export type ExperiencesState = {
  experiences: TExperience[];
  topSkills: Skill[];
};
