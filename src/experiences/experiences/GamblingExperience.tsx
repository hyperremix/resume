import CasinoIcon from '@mui/icons-material/Casino';
import { Skill } from 'experiences/Skill';
import * as React from 'react';
import { TExperience } from '../TExperience';

export const GamblingExperience: TExperience = {
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
    'The team had several challenges during the project. During his time there Fredrik worked on many different topics like cookie consent management, traffic migration (migrated customers), setting up company wide test systems as well as many more. Fredriks biggest contributions to the team was introducing monitoring and alerting. The added transparency enabled them to find a lot of previously unknown bugs not only within the team but throughout the platform. Furthermore, Fredrik designed and implemented a permission management module to allow for easy and extensible permission checks throughout the different microfrontends. Last but not least, Fredrik helped the team become more efficient by improving their agile processes. Through the introduction of several quality gates and focus on clear acceptance criterias and collective alignment on what to achieve both functionally as well as technically, the team went from being regarded as one of the worst performing teams to being one of the best, even inspiring other teams to review their own processes.',
  ],
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
