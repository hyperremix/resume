import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import * as React from 'react';
import { Skill } from 'types/Skill';
import { TExperience } from '../TExperience';

export const AgTechECommerceExperience: TExperience = {
  title: 'AgTech E-Commerce',
  from: new Date('2021-04-01'),
  to: new Date('2022-11-01'),
  icon: <AgricultureOutlinedIcon />,
  role: 'Engineering Manager',
  companyDescription:
    'A Hamburg based, international AgTech e-commerce start-up that is striving to revolutionise and digitalise the market for used agricultural machinery since 2015. The company wants to resolve the many pain points for farmers and dealers operating on this market by bringing transparency to pricing, globalising an otherwise fairly regional market, and prevent fraud.',
  projectDescription:
    'The purpose of the product is to digitalise trade-in process of used machinery and thus support sales people at a dealership during.',
  roleDescription:
    "Fredrik's main focus as an engineering manager was to support the company and the team in building a fast, scalable, reliable and maintainable solution from scratch for the trade-in process at dealerships. This included being involved and driving the decision making from high- to low-level topics revolving the application, what technologies to go for, which services to use, team processes as well as conception.",
  skills: [
    Skill.TypeScript,
    Skill.React,
    Skill.ReactNative,
    Skill.HTML,
    Skill.Expo,
    Skill.NestJS,
    Skill.Docker,
    Skill.MongoDB,
    Skill.ServerlessFramework,
    Skill.AWSLambda,
    Skill.AWSAmplify,
    Skill.AWSS3,
    Skill.AWSDynamoDB,
    Skill.GitHubActions,
    Skill.Auth0,
    Skill.Sentry,
    Skill.Datadog,
    Skill.Cypress,
    Skill.Scrum,
    Skill.Hiring,
    Skill.CoachingAndMentoring,
    Skill.UnitTesting,
    Skill.IntegrationTesting,
    Skill.E2ETesting,
  ],
};
