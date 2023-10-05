import CasinoIcon from '@mui/icons-material/Casino';
import { Stack, Typography } from '@mui/material';
import { ExperienceSection } from 'app/components/ExperienceSection';
import * as React from 'react';
import { Skill } from 'types/Skill';
import { skillIcon } from 'types/skillIcon';

export const Gambling = () => (
  <ExperienceSection
    title="Gambling (Lottery)"
    titleVariant="h6"
    role="Tech Lead / Full-Stack Developer"
    timePeriod="01/2020 - 03/2021"
    icon={<CasinoIcon />}
    companyDescription={
      <Typography>
        A german market leader for Lotto-Ticket-brokering for federal lotteries in Germany.
      </Typography>
    }
    projectDescription={
      <Typography>
        Unifying two different platforms into one single platform as part of the team responsible
        for the core components.
      </Typography>
    }
    roleDescription={
      <Typography>
        The team had several challenges during the project. During his time there Fredrik worked on
        many different topics like cookie consent management, traffic migration (migrated
        customers), setting up company wide test systems as well as many more. Fredriks biggest
        contributions to the team was introducing monitoring and alerting. The added transparency
        enabled them to find a lot of previously unknown bugs not only within the team but
        throughout the platform. Furthermore, Fredrik designed and implemented a permission
        management module to allow for easy and extensible permission checks throughout the
        different microfrontends. Last but not least, Fredrik helped the team become more efficient
        by improving their agile processes. Through the introduction of several quality gates and
        focus on clear acceptance criterias and collective alignment on what to achieve both
        functionally as well as technically, the team went from being regarded as one of the worst
        performing teams to being one of the best, even inspiring other teams to review their own
        processes.
      </Typography>
    }
    skills={
      <Stack direction="row" gap={1} flexWrap="wrap">
        {skillIcon[Skill.Java]}
        {skillIcon[Skill.Kotlin]}
        {skillIcon[Skill.SpringBoot]}
        {skillIcon[Skill.TypeScript]}
        {skillIcon[Skill.Angular]}
        {skillIcon[Skill.NestJS]}
        {skillIcon[Skill.Jenkins]}
        {skillIcon[Skill.Splunk]}
        {skillIcon[Skill.Datadog]}
        {skillIcon[Skill.Kanban]}
        {skillIcon[Skill.UnitTesting]}
        {skillIcon[Skill.IntegrationTesting]}
        {skillIcon[Skill.E2ETesting]}
      </Stack>
    }
  />
);
