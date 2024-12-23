import { Skill } from '@/skill/Skill';
import { TExperience } from './TExperience';
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
  Skill.TypeScript,
  Skill.React,
  Skill.Kotlin,
  Skill.SpringBoot,
  Skill.Kubernetes,
  Skill.AWS,
  Skill.NestJS,
  Skill.MongoDB,
];

export const getSortedSkills = (): { skill: Skill; months: number }[] => {
  const skills = getRecursiveSkills(experiences);
  const sortedSkills = (Object.keys(skills) as Skill[]).sort(
    (a, b) => (skills[b] ?? 0) - (skills[a] ?? 0),
  );
  return sortedSkills.map((skill) => ({ skill, months: skills[skill] ?? 0 }));
};

export const getRecursiveSkills = (experiences: TExperience[]): Partial<Record<Skill, number>> => {
  const skills: Partial<Record<Skill, number>> = {};
  for (const experience of experiences) {
    for (const skill of (experience.skills ?? []).filter(withoutBasicSkills)) {
      const months = getMonthsBetween(experience.from, experience.to);
      skills[skill] = (skills[skill] || 0) + months;
    }

    if (!experience.subExperiences) {
      continue;
    }

    const recursiveSkills = getRecursiveSkills(experience.subExperiences);

    for (const skill of Object.keys(recursiveSkills) as Skill[]) {
      skills[skill] = (skills[skill] ?? 0) + (recursiveSkills[skill] ?? 0);
    }
  }

  return skills;
};

const getMonthsBetween = (from: string, to?: string): number => {
  const fromDateTime = new Date(from);
  const toDateTime = to ? new Date(to) : new Date();

  const yearsDifference = toDateTime.getFullYear() - fromDateTime.getFullYear();
  const monthsDifference = toDateTime.getMonth() - fromDateTime.getMonth();

  const totalMonths = yearsDifference * 12 + monthsDifference;

  return totalMonths;
};

const withoutBasicSkills = (experience: Skill): boolean =>
  experience !== Skill.HTML &&
  experience !== Skill.CSS &&
  experience !== Skill.JavaScript &&
  experience !== Skill.Java &&
  experience !== Skill.SASS &&
  experience !== Skill.CoachingAndMentoring &&
  experience !== Skill.Hiring;
