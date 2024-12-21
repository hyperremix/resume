import Angular from '@/icons/tech/angular';
import Auth0 from '@/icons/tech/auth0';
import AWS from '@/icons/tech/aws';
import AWSAmplify from '@/icons/tech/aws-amplify';
import AWSCognito from '@/icons/tech/aws-cognito';
import AWSDynamoDB from '@/icons/tech/aws-dynamodb';
import AWSKinesis from '@/icons/tech/aws-kinesis';
import AWSLambda from '@/icons/tech/aws-lambda';
import AWSS3 from '@/icons/tech/aws-s3';
import AWSSQS from '@/icons/tech/aws-sqs';
import CSharp from '@/icons/tech/c-sharp';
import Css from '@/icons/tech/css';
import Cypress from '@/icons/tech/cypress';
import Datadog from '@/icons/tech/datadog';
import Docker from '@/icons/tech/docker';
import DotNet from '@/icons/tech/dot-net';
import Expo from '@/icons/tech/expo';
import Github from '@/icons/tech/github';
import Gitlab from '@/icons/tech/gitlab';
import Go from '@/icons/tech/go';
import Grafana from '@/icons/tech/grafana';
import GRPC from '@/icons/tech/grpc';
import Helm from '@/icons/tech/helm';
import Html from '@/icons/tech/html';
import Java from '@/icons/tech/java';
import Javascript from '@/icons/tech/javascript';
import Jenkins from '@/icons/tech/jenkins';
import Kafka from '@/icons/tech/kafka';
import Keycloak from '@/icons/tech/keycloak';
import Kibana from '@/icons/tech/kibana';
import Kotlin from '@/icons/tech/kotlin';
import Kubernetes from '@/icons/tech/kubernetes';
import MongoDB from '@/icons/tech/mongodb';
import Motion from '@/icons/tech/motion';
import NestJS from '@/icons/tech/nestjs';
import NextJS from '@/icons/tech/nextjs';
import OpenShift from '@/icons/tech/openshift';
import Playwright from '@/icons/tech/playwright';
import Postgres from '@/icons/tech/postgres';
import Prometheus from '@/icons/tech/prometheus';
import Protobuf from '@/icons/tech/protobuf';
import React from '@/icons/tech/react';
import Sass from '@/icons/tech/sass';
import Sentry from '@/icons/tech/sentry';
import ServerlessFramework from '@/icons/tech/serverless-framework';
import Shadcn from '@/icons/tech/shadcn';
import Splunk from '@/icons/tech/splunk';
import SpringBoot from '@/icons/tech/spring-boot';
import SqlServer from '@/icons/tech/sql-server';
import Tailwind from '@/icons/tech/tailwind';
import TypeScript from '@/icons/tech/typescript';
import Vercel from '@/icons/tech/vercel';
import Vite from '@/icons/tech/vite';
import Vuejs from '@/icons/tech/vuejs';
import { ReactElement } from 'react';
import { Skill } from './Skill';
import { SkillCategory } from './SkillCategory';

type SkillConfigMap = Record<Skill, SkillConfig>;

type SkillConfig = {
  label?: Skill;
  icon?: ReactElement;
  category: SkillCategory;
};

export const skillConfig: SkillConfigMap = {
  [Skill.TypeScript]: {
    label: Skill.TypeScript,
    category: SkillCategory.Languages,
    icon: <TypeScript />,
  },
  [Skill.Java]: { label: Skill.Java, category: SkillCategory.Languages, icon: <Java /> },
  [Skill.Kotlin]: { label: Skill.Kotlin, category: SkillCategory.Languages, icon: <Kotlin /> },
  [Skill.CSharp]: { category: SkillCategory.Languages, icon: <CSharp /> },
  [Skill.Vue]: { label: Skill.Vue, category: SkillCategory.Frameworks, icon: <Vuejs /> },
  [Skill.React]: { label: Skill.React, category: SkillCategory.Frameworks, icon: <React /> },
  [Skill.ReactNative]: {
    label: Skill.ReactNative,
    category: SkillCategory.Frameworks,
    icon: <React />,
  },
  [Skill.Vite]: { label: Skill.Vite, category: SkillCategory.Tools, icon: <Vite /> },
  [Skill.Tailwind]: { label: Skill.Tailwind, category: SkillCategory.Tools, icon: <Tailwind /> },
  [Skill.Shadcn]: { label: Skill.Shadcn, category: SkillCategory.Tools, icon: <Shadcn /> },
  [Skill.Motion]: { label: Skill.Motion, category: SkillCategory.Tools, icon: <Motion /> },
  [Skill.NestJS]: { label: Skill.NestJS, category: SkillCategory.Frameworks, icon: <NestJS /> },
  [Skill.ServerlessFramework]: {
    label: Skill.ServerlessFramework,
    category: SkillCategory.Frameworks,
    icon: <ServerlessFramework />,
  },
  [Skill.SpringBoot]: {
    label: Skill.SpringBoot,
    category: SkillCategory.Frameworks,
    icon: <SpringBoot />,
  },
  [Skill.Angular]: { label: Skill.Angular, category: SkillCategory.Frameworks, icon: <Angular /> },
  [Skill.AngularJS]: {
    label: Skill.AngularJS,
    category: SkillCategory.Frameworks,
    icon: <Angular />,
  },
  [Skill.Helm]: { label: Skill.Helm, category: SkillCategory.Tools, icon: <Helm /> },
  [Skill.VertX]: { label: Skill.VertX, category: SkillCategory.Frameworks },
  [Skill.DotNetFramework]: {
    category: SkillCategory.Frameworks,
    icon: <DotNet />,
  },
  [Skill.MongoDB]: { label: Skill.MongoDB, category: SkillCategory.Databases, icon: <MongoDB /> },
  [Skill.PostgreSQL]: {
    label: Skill.PostgreSQL,
    category: SkillCategory.Databases,
    icon: <Postgres />,
  },
  [Skill.AWSDynamoDB]: {
    label: Skill.AWSDynamoDB,
    category: SkillCategory.Databases,
    icon: <AWSDynamoDB />,
  },
  [Skill.GitHubActions]: {
    label: Skill.GitHubActions,
    category: SkillCategory.CI_CD,
    icon: <Github />,
  },
  [Skill.Jenkins]: { label: Skill.Jenkins, category: SkillCategory.CI_CD, icon: <Jenkins /> },
  [Skill.TeamCity]: { label: Skill.TeamCity, category: SkillCategory.CI_CD },
  [Skill.Kubernetes]: {
    label: Skill.Kubernetes,
    category: SkillCategory.Tools,
    icon: <Kubernetes />,
  },
  [Skill.OpenShift]: { label: Skill.OpenShift, category: SkillCategory.Tools, icon: <OpenShift /> },
  [Skill.Sentry]: { label: Skill.Sentry, category: SkillCategory.Monitoring, icon: <Sentry /> },
  [Skill.Datadog]: { label: Skill.Datadog, category: SkillCategory.Monitoring, icon: <Datadog /> },
  [Skill.Kibana]: { label: Skill.Kibana, category: SkillCategory.Monitoring, icon: <Kibana /> },
  [Skill.Grafana]: { label: Skill.Grafana, category: SkillCategory.Monitoring, icon: <Grafana /> },
  [Skill.Splunk]: { label: Skill.Splunk, category: SkillCategory.Monitoring, icon: <Splunk /> },
  [Skill.Prometheus]: {
    label: Skill.Prometheus,
    category: SkillCategory.Monitoring,
    icon: <Prometheus />,
  },
  [Skill.Cypress]: { label: Skill.Cypress, category: SkillCategory.Testing, icon: <Cypress /> },
  [Skill.Playwright]: {
    label: Skill.Playwright,
    category: SkillCategory.Testing,
    icon: <Playwright />,
  },
  [Skill.AWS]: { label: Skill.AWS, category: SkillCategory.Cloud, icon: <AWS /> },
  [Skill.AWSLambda]: { label: Skill.AWSLambda, category: SkillCategory.Cloud, icon: <AWSLambda /> },
  [Skill.AWSAmplify]: {
    label: Skill.AWSAmplify,
    category: SkillCategory.Cloud,
    icon: <AWSAmplify />,
  },
  [Skill.AWSS3]: { label: Skill.AWSS3, category: SkillCategory.Cloud, icon: <AWSS3 /> },
  [Skill.Expo]: { label: Skill.Expo, category: SkillCategory.Frameworks, icon: <Expo /> },
  [Skill.Docker]: { label: Skill.Docker, category: SkillCategory.Tools, icon: <Docker /> },
  [Skill.Auth0]: { label: Skill.Auth0, category: SkillCategory.IAM, icon: <Auth0 /> },
  [Skill.Keycloak]: { label: Skill.Keycloak, category: SkillCategory.IAM, icon: <Keycloak /> },
  [Skill.Scrum]: { label: Skill.Scrum, category: SkillCategory.Methodologies },
  [Skill.Kanban]: { label: Skill.Kanban, category: SkillCategory.Methodologies },
  [Skill.Hiring]: { label: Skill.Hiring, category: SkillCategory.SoftSkills },
  [Skill.CoachingAndMentoring]: {
    label: Skill.CoachingAndMentoring,
    category: SkillCategory.SoftSkills,
  },
  [Skill.HTML]: { label: Skill.HTML, category: SkillCategory.Languages, icon: <Html /> },
  [Skill.CSS]: { label: Skill.CSS, category: SkillCategory.Languages, icon: <Css /> },
  [Skill.Go]: { category: SkillCategory.Languages, icon: <Go /> },
  [Skill.UnitTesting]: { label: Skill.UnitTesting, category: SkillCategory.Testing },
  [Skill.IntegrationTesting]: { label: Skill.IntegrationTesting, category: SkillCategory.Testing },
  [Skill.E2ETesting]: { label: Skill.E2ETesting, category: SkillCategory.Testing },
  [Skill.SASS]: { label: Skill.SASS, category: SkillCategory.Languages, icon: <Sass /> },
  [Skill.SQLServer]: {
    label: Skill.SQLServer,
    category: SkillCategory.Databases,
    icon: <SqlServer />,
  },
  [Skill.Kafka]: { label: Skill.Kafka, category: SkillCategory.Tools, icon: <Kafka /> },
  [Skill.GitLabCI]: { label: Skill.GitLabCI, category: SkillCategory.CI_CD, icon: <Gitlab /> },
  [Skill.JavaScript]: {
    label: Skill.JavaScript,
    category: SkillCategory.Languages,
    icon: <Javascript />,
  },
  [Skill.AWSKinesis]: {
    label: Skill.AWSKinesis,
    category: SkillCategory.Cloud,
    icon: <AWSKinesis />,
  },
  [Skill.AWSSQS]: { label: Skill.AWSSQS, category: SkillCategory.Cloud, icon: <AWSSQS /> },
  [Skill.AWSCognito]: {
    label: Skill.AWSCognito,
    category: SkillCategory.IAM,
    icon: <AWSCognito />,
  },
  [Skill.GRPC]: { category: SkillCategory.Frameworks, icon: <GRPC /> },
  [Skill.Protobuf]: {
    label: Skill.Protobuf,
    category: SkillCategory.Languages,
    icon: <Protobuf />,
  },
  [Skill.Vercel]: { label: Skill.Vercel, category: SkillCategory.Tools, icon: <Vercel /> },
  [Skill.NextJS]: { label: Skill.NextJS, category: SkillCategory.Frameworks, icon: <NextJS /> },
};
