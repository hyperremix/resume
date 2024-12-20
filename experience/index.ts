import { Skill } from '@/skill/Skill';
import { BrainwareGroupExperience } from './experiences/BrainwareGroupExperience';
import { Cdon2012Experience } from './experiences/Cdon2012Experience';
import { Cdon2013Experience } from './experiences/Cdon2013Experience';
import { LundUniversityExperience } from './experiences/LundUniversityExperience';
import { NetlightExperience } from './experiences/NetlightExperience';

export const experiences = [
  NetlightExperience,
  BrainwareGroupExperience,
  Cdon2013Experience,
  Cdon2012Experience,
  LundUniversityExperience,
];

export const topSkills = [
  Skill.React,
  Skill.TypeScript,
  Skill.Kotlin,
  Skill.Kubernetes,
  Skill.AWS,
  Skill.SpringBoot,
  Skill.NestJS,
  Skill.MongoDB,
];

export const name = 'Fredrik Pettersson';
export const role = 'Software Generalist';
export const elevatorPitch =
  'Fredrik is a versatile professional with expertise in a broad range of technologies and disciplines. His core lies in all aspects of software development, and he excels in dynamic teams operating in fast-paced environments, prioritizing what is most important at any given moment. Fredrik is dedicated to problem-solving and has a passion for ongoing professional growth. As a team player at heart, he enjoys sharing his knowledge and supporting colleagues whenever possible.';
