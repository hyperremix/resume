import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import { Stack, Typography } from '@mui/material';
import { ExperienceSection } from 'app/components/ExperienceSection';
import * as React from 'react';
import { Skill } from 'types/Skill';
import { skillIcon } from 'types/skillIcon';

export const AgTechECommerce = () => (
  <ExperienceSection
    title="AgTech E-Commerce"
    titleVariant="h6"
    role="Engineering Manager"
    timePeriod="04/2021 - 11/2022"
    icon={<AgricultureOutlinedIcon />}
    companyDescription={
      <Typography>
        A Hamburg based, international AgTech e-commerce start-up that is striving to revolutionise
        and digitalise the market for used agricultural machinery since 2015. The company wants to
        resolve the many pain points for farmers and dealers operating on this market by bringing
        transparency to pricing, globalising an otherwise fairly regional market, and prevent fraud.
      </Typography>
    }
    projectDescription={
      <Typography>
        The purpose of the product is to digitalise trade-in process of used machinery and thus
        support sales people at a dealership during.
      </Typography>
    }
    roleDescription={
      <Stack gap={1}>
        <Typography>
          Fredrik's main focus as an engineering manager was to support the company and the team in
          building a fast, scalable, reliable and maintainable solution from scratch for the
          trade-in process at dealerships. This included being involved and driving the decision
          making from high- to low-level topics revolving the application, what technologies to go
          for, which services to use, team processes as well as conception.
        </Typography>
        <Typography>
          Fredrik supported the head of product and engineering in designing solution for the
          broader IT landscape. He also took the role of a mentor and coach and was very tightly
          tied into the hiring process.
        </Typography>
      </Stack>
    }
    skills={
      <Stack direction="row" gap={1} flexWrap="wrap">
        {skillIcon[Skill.TypeScript]}
        {skillIcon[Skill.React]}
        {skillIcon[Skill.ReactNative]}
        {skillIcon[Skill.HTML]}
        {skillIcon[Skill.Expo]}
        {skillIcon[Skill.NestJS]}
        {skillIcon[Skill.Docker]}
        {skillIcon[Skill.MongoDB]}
        {skillIcon[Skill.ServerlessFramework]}
        {skillIcon[Skill.AWSLambda]}
        {skillIcon[Skill.AWSAmplify]}
        {skillIcon[Skill.AWSS3]}
        {skillIcon[Skill.AWSDynamoDB]}
        {skillIcon[Skill.GitHub]}
        {skillIcon[Skill.GitHubActions]}
        {skillIcon[Skill.Auth0]}
        {skillIcon[Skill.Sentry]}
        {skillIcon[Skill.Datadog]}
        {skillIcon[Skill.Cypress]}
        {skillIcon[Skill.Scrum]}
        {skillIcon[Skill.Hiring]}
        {skillIcon[Skill.CoachingAndMentoring]}
        {skillIcon[Skill.UnitTesting]}
        {skillIcon[Skill.IntegrationTesting]}
        {skillIcon[Skill.E2ETesting]}
      </Stack>
    }
  />
);
