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
    for (const skill of (experience.skills ?? []).filter(withoutSoftSkills)) {
      const months = monthsBetween(experience.from, experience.to || new Date());
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

const withoutSoftSkills = (experience: Skill): boolean =>
  experience !== Skill.UnitTesting &&
  experience !== Skill.E2ETesting &&
  experience !== Skill.IntegrationTesting &&
  experience !== Skill.HTML &&
  experience !== Skill.CSS &&
  experience !== Skill.Cypress &&
  experience !== Skill.CoachingAndMentoring &&
  experience !== Skill.Hiring &&
  experience !== Skill.Kanban &&
  experience !== Skill.Scrum &&
  experience !== Skill.Kibana &&
  experience !== Skill.Grafana &&
  experience !== Skill.Splunk &&
  experience !== Skill.Prometheus &&
  experience !== Skill.Datadog &&
  experience !== Skill.Sentry &&
  experience !== Skill.JavaScript;

const monthsBetween = (from: Date, to: Date) => {
  const fromYear = from.getFullYear();
  const fromMonth = from.getMonth();

  const toYear = to.getFullYear();
  const toMonth = to.getMonth();

  return (toYear - fromYear) * 12 + (toMonth - fromMonth);
};
