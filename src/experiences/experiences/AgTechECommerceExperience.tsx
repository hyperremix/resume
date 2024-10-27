import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import { Skill } from 'experiences/Skill';
import * as React from 'react';
import { TExperience } from '../TExperience';

export const AgTechECommerceExperience: TExperience = {
  slug: 'ag-tech',
  title: 'AgTech E-Commerce',
  from: new Date('2021-04-01'),
  to: new Date('2022-11-01'),
  icon: <AgricultureOutlinedIcon />,
  companyDescription:
    'A Hamburg based, international AgTech e-commerce start-up that is striving to revolutionise and digitalise the market for used agricultural machinery since 2015. The company wants to resolve the many pain points for farmers and dealers operating on this market by bringing transparency to pricing, globalising an otherwise fairly regional market, and prevent fraud.',
  projectDescription:
    'Digitalization of the trade-in process of used machinery by providing partnered dealers with an intuitive self-service cross-platform app.',
  roles: [
    {
      title: 'Engineering Manager',
      description: [
        "Fredrik's main focus as an engineering manager was to support the company and the team in building a fast, scalable, reliable, and maintainable solution from scratch for the trade-in process at dealerships. This included being involved in and driving decision-making from high- to low-level topics related to the application, such as selecting technologies, choosing services, and establishing team processes. Fredrik supported the head of product and engineering in designing solutions for the broader IT landscape. He also took on the role of mentor and coach and was closely involved in the hiring process.",
      ],
    },
  ],
  highlightedSkills: [Skill.React, Skill.Expo, Skill.NestJS, Skill.AWSDynamoDB, Skill.AWSLambda],
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
