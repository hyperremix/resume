import KeyIcon from '@mui/icons-material/Key';
import { Chip } from '@mui/material';
import { AWSAmplify } from 'app/icons/AWSAmplify';
import { AWSDynamoDB } from 'app/icons/AWSDynamoDB';
import { AWSLambda } from 'app/icons/AWSLambda';
import { AWSS3 } from 'app/icons/AWSS3';
import { Auth0 } from 'app/icons/Auth0';
import { Css } from 'app/icons/Css';
import { Cypress } from 'app/icons/Cypress';
import { Datadog } from 'app/icons/Datadog';
import { Expo } from 'app/icons/Expo';
import { Grafana } from 'app/icons/Grafana';
import { Helm } from 'app/icons/Helm';
import { Html } from 'app/icons/Html';
import { Jenkins } from 'app/icons/Jenkins';
import { MongoDB } from 'app/icons/MongoDB';
import { NestJS } from 'app/icons/NestJS';
import { OpenShift } from 'app/icons/OpenShift';
import { Sentry } from 'app/icons/Sentry';
import { ServerlessFramework } from 'app/icons/ServerlessFramework';
import { Splunk } from 'app/icons/Splunk';
import { SqlServer } from 'app/icons/SqlServer';
import {
  Angular,
  Docker,
  DotNet,
  DramaMasks,
  Elephant,
  Github,
  Kubernetes,
  LanguageCsharp,
  LanguageGo,
  LanguageJava,
  LanguageKotlin,
  LanguageTypescript,
  Leaf,
  React as Reactjs,
  Sass,
  Torch,
  Vuejs,
} from 'mdi-material-ui';
import * as React from 'react';
import { ReactNode } from 'react';
import { Skill } from './Skill';

export const skillIcon: Record<Skill, ReactNode> = {
  [Skill.TypeScript]: <Chip icon={<LanguageTypescript />} label="TypeScript" />,
  [Skill.Java]: <Chip icon={<LanguageJava />} label="Java" />,
  [Skill.Kotlin]: <Chip icon={<LanguageKotlin />} label="Kotlin" />,
  [Skill.CSharp]: <Chip icon={<LanguageCsharp />} label="C#" />,
  [Skill.Vue]: <Chip icon={<Vuejs />} label="Vue" />,
  [Skill.React]: <Chip icon={<Reactjs />} label="React" />,
  [Skill.ReactNative]: <Chip icon={<Reactjs />} label="React Native" />,
  [Skill.NestJS]: <Chip icon={<NestJS />} label="NestJS" />,
  [Skill.ServerlessFramework]: <Chip icon={<ServerlessFramework />} label="Serverless Framework" />,
  [Skill.SpringBoot]: <Chip icon={<Leaf />} label="Spring Boot" />,
  [Skill.Angular]: <Chip icon={<Angular />} label="Angular" />,
  [Skill.Helm]: <Chip icon={<Helm />} label="Helm" />,
  [Skill.VertX]: <Chip label="Vert.x" />,
  [Skill.DotNetCore]: <Chip icon={<DotNet />} label=".NET Core" />,
  [Skill.MongoDB]: <Chip icon={<MongoDB />} label="MongoDb" />,
  [Skill.PostgreSQL]: <Chip icon={<Elephant />} label="PostgreSQL" />,
  [Skill.AWSDynamoDB]: <Chip icon={<AWSDynamoDB />} label="AWS DynamoDB" />,
  [Skill.GitHubActions]: <Chip icon={<Github />} label="Github Actions" />,
  [Skill.Jenkins]: <Chip icon={<Jenkins />} label="Jenkins" />,
  [Skill.TeamCity]: <Chip label="TeamCity" />,
  [Skill.Kubernetes]: <Chip icon={<Kubernetes />} label="Kubernetes" />,
  [Skill.OpenShift]: <Chip icon={<OpenShift />} label="Openhsift" />,
  [Skill.Sentry]: <Chip icon={<Sentry />} label="Sentry" />,
  [Skill.Datadog]: <Chip icon={<Datadog />} label="Datadog" />,
  [Skill.Kibana]: <Chip label="Kibana" />,
  [Skill.Grafana]: <Chip icon={<Grafana />} label="Grafana" />,
  [Skill.Splunk]: <Chip icon={<Splunk />} label="Splunk" />,
  [Skill.Prometheus]: <Chip icon={<Torch />} label="Prometheus" />,
  [Skill.Cypress]: <Chip icon={<Cypress />} label="Cypress" />,
  [Skill.Playwright]: <Chip icon={<DramaMasks />} label="Playwright" />,
  [Skill.AWSLambda]: <Chip icon={<AWSLambda />} label="AWS Lambda" />,
  [Skill.AWSAmplify]: <Chip icon={<AWSAmplify />} label="AWS Amplify" />,
  [Skill.AWSS3]: <Chip icon={<AWSS3 />} label="AWS S3" />,
  [Skill.Expo]: <Chip icon={<Expo />} label="Expo" />,
  [Skill.Docker]: <Chip icon={<Docker />} label="Docker" />,
  [Skill.GitHub]: <Chip icon={<Github />} label="GitHub" />,
  [Skill.Auth0]: <Chip icon={<Auth0 />} label="Auth0" />,
  [Skill.Keycloak]: <Chip icon={<KeyIcon />} label="Keycloak" />,
  [Skill.Scrum]: <Chip label="Scrum" />,
  [Skill.Kanban]: <Chip label="Kanban" />,
  [Skill.Hiring]: <Chip label="Hiring" />,
  [Skill.CoachingAndMentoring]: <Chip label="Coaching & Mentoring" />,
  [Skill.HTML]: <Chip icon={<Html />} label="HTML" />,
  [Skill.CSS]: <Chip icon={<Css />} label="CSS" />,
  [Skill.Go]: <Chip icon={<LanguageGo />} label="Go" />,
  [Skill.UnitTesting]: <Chip label="Unit Testing" />,
  [Skill.IntegrationTesting]: <Chip label="Integration Testing" />,
  [Skill.E2ETesting]: <Chip label="E2E Testing" />,
  [Skill.SASS]: <Chip icon={<Sass />} label="SASS" />,
  [Skill.SQLServer]: <Chip icon={<SqlServer />} label="SQL Server" />,
};
