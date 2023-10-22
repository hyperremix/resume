import { Skill } from 'experiences/Skill';
import { TExperience } from './TExperience';
import { BrainwareGroupExperience, Cdon2012Experience, Cdon2013Experience } from './experiences';
import { NetlightExperience } from './experiences/NetlightExperience';
import { ExperiencesState } from './types';

export const experiencesState: ExperiencesState = {
  experiences: [
    NetlightExperience,
    BrainwareGroupExperience,
    Cdon2013Experience,
    Cdon2012Experience,
  ],
};

export const getSortedSkills = (): { skill: Skill; months: number }[] => {
  const skills = getRecursiveSkills(experiencesState.experiences);
  const sortedSkills = Object.keys(skills).sort((a, b) => skills[b] - skills[a]) as Skill[];
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

    for (const skill of Object.keys(recursiveSkills)) {
      skills[skill] = (skills[skill] || 0) + recursiveSkills[skill];
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
