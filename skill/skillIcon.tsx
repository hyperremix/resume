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

export const skillIcon: Record<Skill, ReactElement | undefined> = {
  [Skill.TypeScript]: <TypeScript />,
  [Skill.Java]: <Java />,
  [Skill.Kotlin]: <Kotlin />,
  [Skill.CSharp]: <CSharp />,
  [Skill.Vue]: <Vuejs />,
  [Skill.React]: <React />,
  [Skill.ReactNative]: <React />,
  [Skill.Vite]: <Vite />,
  [Skill.Tailwind]: <Tailwind />,
  [Skill.Shadcn]: <Shadcn />,
  [Skill.Motion]: <Motion />,
  [Skill.NestJS]: <NestJS />,
  [Skill.ServerlessFramework]: <ServerlessFramework />,
  [Skill.SpringBoot]: <SpringBoot />,
  [Skill.Angular]: <Angular />,
  [Skill.AngularJS]: <Angular />,
  [Skill.Helm]: <Helm />,
  [Skill.VertX]: undefined,
  [Skill.DotNetFramework]: <DotNet />,
  [Skill.MongoDB]: <MongoDB />,
  [Skill.PostgreSQL]: <Postgres />,
  [Skill.AWSDynamoDB]: <AWSDynamoDB />,
  [Skill.GitHubActions]: <Github />,
  [Skill.Jenkins]: <Jenkins />,
  [Skill.TeamCity]: undefined,
  [Skill.Kubernetes]: <Kubernetes />,
  [Skill.OpenShift]: <OpenShift />,
  [Skill.Sentry]: <Sentry />,
  [Skill.Datadog]: <Datadog />,
  [Skill.Kibana]: <Kibana />,
  [Skill.Grafana]: <Grafana />,
  [Skill.Splunk]: <Splunk />,
  [Skill.Prometheus]: <Prometheus />,
  [Skill.Cypress]: <Cypress />,
  [Skill.Playwright]: <Playwright />,
  [Skill.AWS]: <AWS />,
  [Skill.AWSLambda]: <AWSLambda />,
  [Skill.AWSAmplify]: <AWSAmplify />,
  [Skill.AWSS3]: <AWSS3 />,
  [Skill.Expo]: <Expo />,
  [Skill.Docker]: <Docker />,
  [Skill.Auth0]: <Auth0 />,
  [Skill.Keycloak]: <Keycloak />,
  [Skill.Scrum]: undefined,
  [Skill.Kanban]: undefined,
  [Skill.Hiring]: undefined,
  [Skill.CoachingAndMentoring]: undefined,
  [Skill.HTML]: <Html />,
  [Skill.CSS]: <Css />,
  [Skill.Go]: <Go />,
  [Skill.UnitTesting]: undefined,
  [Skill.IntegrationTesting]: undefined,
  [Skill.E2ETesting]: undefined,
  [Skill.SASS]: <Sass />,
  [Skill.SQLServer]: <SqlServer />,
  [Skill.Kafka]: <Kafka />,
  [Skill.GitLabCI]: <Gitlab />,
  [Skill.JavaScript]: <Javascript />,
  [Skill.AWSKinesis]: <AWSKinesis />,
  [Skill.AWSSQS]: <AWSSQS />,
  [Skill.AWSCognito]: <AWSCognito />,
  [Skill.GRPC]: <GRPC />,
  [Skill.Protobuf]: <Protobuf />,
  [Skill.Vercel]: <Vercel />,
  [Skill.NextJS]: <NextJS />,
};
