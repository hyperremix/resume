import CasinoIcon from '@mui/icons-material/Casino';
import { Skill } from 'experiences/Skill';
import * as React from 'react';
import { TExperience } from '../TExperience';

export const GamblingExperience: TExperience = {
  slug: 'gambling',
  title: 'Gambling (Lottery)',
  from: new Date('2020-01-01'),
  to: new Date('2021-04-01'),
  icon: <CasinoIcon />,
  role: 'Tech Lead / Full-Stack Developer',
  companyDescription:
    'A german market leader for Lotto-Ticket-brokering for federal lotteries in Germany.',
  projectDescription:
    'Unifying two different platforms into one single platform as part of the team responsible for the core components.',
  roleDescription: [
    "The team faced several challenges during the project. Fredrik worked on various tasks including cookie consent management, traffic migration, and setting up company-wide test systems. His most significant contribution was introducing monitoring and alerting, which added transparency and uncovered previously unknown bugs across the platform. Additionally, Fredrik designed and implemented a permission management module for easy and extensible permission checks across micro-frontends. He also improved the team's efficiency by enhancing agile processes, introducing quality gates, and focusing on clear acceptance criteria and collective alignment. These efforts significantly improved the team's performance and inspired other teams to review their processes.",
  ],
  highlightedSkills: [Skill.Kotlin, Skill.SpringBoot, Skill.TypeScript, Skill.Angular],
  skills: [
    Skill.Java,
    Skill.Kotlin,
    Skill.SpringBoot,
    Skill.TypeScript,
    Skill.Angular,
    Skill.SASS,
    Skill.NestJS,
    Skill.Jenkins,
    Skill.Splunk,
    Skill.Datadog,
    Skill.Sentry,
    Skill.Kanban,
    Skill.UnitTesting,
    Skill.IntegrationTesting,
    Skill.E2ETesting,
  ],
};
