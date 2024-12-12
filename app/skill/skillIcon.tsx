import Angular from '@/icons/tech/angular.svg?react';
import Auth0 from '@/icons/tech/auth0.svg?react';
import AWSAmplify from '@/icons/tech/aws-amplify.svg?react';
import AWSCognito from '@/icons/tech/aws-cognito.svg?react';
import AWSDynamoDB from '@/icons/tech/aws-dynamodb.svg?react';
import AWSKinesis from '@/icons/tech/aws-kinesis.svg?react';
import AWSLambda from '@/icons/tech/aws-lambda.svg?react';
import AWSS3 from '@/icons/tech/aws-s3.svg?react';
import AWSSQS from '@/icons/tech/aws-sqs.svg?react';
import AWS from '@/icons/tech/aws.svg?react';
import CSharp from '@/icons/tech/c-sharp.svg?react';
import Css from '@/icons/tech/css.svg?react';
import Cypress from '@/icons/tech/cypress.svg?react';
import Datadog from '@/icons/tech/datadog.svg?react';
import Docker from '@/icons/tech/docker.svg?react';
import DotNet from '@/icons/tech/dot-net.svg?react';
import Expo from '@/icons/tech/expo.svg?react';
import Github from '@/icons/tech/github.svg?react';
import Gitlab from '@/icons/tech/gitlab.svg?react';
import Go from '@/icons/tech/go.svg?react';
import Grafana from '@/icons/tech/grafana.svg?react';
import GRPC from '@/icons/tech/grpc.svg?react';
import Helm from '@/icons/tech/helm.svg?react';
import Html from '@/icons/tech/html.svg?react';
import Java from '@/icons/tech/java.svg?react';
import Javascript from '@/icons/tech/javascript.svg?react';
import Jenkins from '@/icons/tech/jenkins.svg?react';
import Kafka from '@/icons/tech/kafka.svg?react';
import Keycloak from '@/icons/tech/keycloak.svg?react';
import Kibana from '@/icons/tech/kibana.svg?react';
import Kotlin from '@/icons/tech/kotlin.svg?react';
import Kubernetes from '@/icons/tech/kubernetes.svg?react';
import MongoDB from '@/icons/tech/mongodb.svg?react';
import Motion from '@/icons/tech/motion.svg?react';
import NestJS from '@/icons/tech/nestjs.svg?react';
import OpenShift from '@/icons/tech/openshift.svg?react';
import Playwright from '@/icons/tech/playwright.svg?react';
import Postgres from '@/icons/tech/postgres.svg?react';
import Prometheus from '@/icons/tech/prometheus.svg?react';
import Protobuf from '@/icons/tech/protobuf.svg?react';
import React from '@/icons/tech/react.svg?react';
import Sass from '@/icons/tech/sass.svg?react';
import Sentry from '@/icons/tech/sentry.svg?react';
import ServerlessFramework from '@/icons/tech/serverless-framework.svg?react';
import Shadcn from '@/icons/tech/shadcn.svg?react';
import Splunk from '@/icons/tech/splunk.svg?react';
import SpringBoot from '@/icons/tech/spring-boot.svg?react';
import SqlServer from '@/icons/tech/sql-server.svg?react';
import Tailwind from '@/icons/tech/tailwind.svg?react';
import TypeScript from '@/icons/tech/typescript.svg?react';
import Vercel from '@/icons/tech/vercel.svg?react';
import Vite from '@/icons/tech/vite.svg?react';
import Vuejs from '@/icons/tech/vuejs.svg?react';
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
  [Skill.AWSKinesis]: <AWSKinesis style={{ marginTop: '-3px', marginBottom: '3px' }} />,
  [Skill.AWSSQS]: <AWSSQS />,
  [Skill.AWSCognito]: <AWSCognito />,
  [Skill.GRPC]: <GRPC />,
  [Skill.Protobuf]: <Protobuf />,
  [Skill.Vercel]: <Vercel style={{ marginTop: '-2px', marginBottom: '2px' }} />,
};
