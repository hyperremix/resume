import { Skill } from './Skill';
import { TExperience } from './TExperience';

export type ExperiencesState = {
  experiences: TExperience[];
  topSkills: Skill[];
};
