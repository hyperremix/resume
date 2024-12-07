import { Javascript } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';
import { AWSAmplify } from 'app/icons/AWSAmplify';
import { AWSCognito } from 'app/icons/AWSCognito';
import { AWSDynamoDB } from 'app/icons/AWSDynamoDB';
import { AWSKinesis } from 'app/icons/AWSKinesis';
import { AWSLambda } from 'app/icons/AWSLambda';
import { AWSS3 } from 'app/icons/AWSS3';
import { AWSSQS } from 'app/icons/AWSSQS';
import { Auth0 } from 'app/icons/Auth0';
import { Css } from 'app/icons/Css';
import { Cypress } from 'app/icons/Cypress';
import { Datadog } from 'app/icons/Datadog';
import { Expo } from 'app/icons/Expo';
import { GRPC } from 'app/icons/GRPC';
import { Grafana } from 'app/icons/Grafana';
import { Helm } from 'app/icons/Helm';
import { Html } from 'app/icons/Html';
import { Jenkins } from 'app/icons/Jenkins';
import { Kibana } from 'app/icons/Kibana';
import { MongoDB } from 'app/icons/MongoDB';
import { NestJS } from 'app/icons/NestJS';
import { OpenShift } from 'app/icons/OpenShift';
import { Protobuf } from 'app/icons/Protobuf';
import { Sentry } from 'app/icons/Sentry';
import { ServerlessFramework } from 'app/icons/ServerlessFramework';
import { Splunk } from 'app/icons/Splunk';
import { SqlServer } from 'app/icons/SqlServer';
import {
  Angular,
  ApacheKafka,
  Aws,
  Docker,
  DotNet,
  DramaMasks,
  Elephant,
  Github,
  Gitlab,
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
import { ReactElement } from 'react';
import { Skill } from './Skill';

export const skillIcon: Record<Skill, ReactElement | undefined> = {
  [Skill.TypeScript]: <LanguageTypescript />,
  [Skill.Java]: <LanguageJava />,
  [Skill.Kotlin]: <LanguageKotlin />,
  [Skill.CSharp]: <LanguageCsharp />,
  [Skill.Vue]: <Vuejs />,
  [Skill.React]: <Reactjs />,
  [Skill.ReactNative]: <Reactjs />,
  [Skill.NestJS]: <NestJS />,
  [Skill.ServerlessFramework]: <ServerlessFramework />,
  [Skill.SpringBoot]: <Leaf />,
  [Skill.Angular]: <Angular />,
  [Skill.AngularJS]: <Angular />,
  [Skill.Helm]: <Helm />,
  [Skill.VertX]: undefined,
  [Skill.DotNetFramework]: <DotNet />,
  [Skill.MongoDB]: <MongoDB />,
  [Skill.PostgreSQL]: <Elephant />,
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
  [Skill.Prometheus]: <Torch />,
  [Skill.Cypress]: <Cypress />,
  [Skill.Playwright]: <DramaMasks />,
  [Skill.AWS]: <Aws />,
  [Skill.AWSLambda]: <AWSLambda />,
  [Skill.AWSAmplify]: <AWSAmplify />,
  [Skill.AWSS3]: <AWSS3 />,
  [Skill.Expo]: <Expo />,
  [Skill.Docker]: <Docker />,
  [Skill.Auth0]: <Auth0 />,
  [Skill.Keycloak]: <KeyIcon />,
  [Skill.Scrum]: undefined,
  [Skill.Kanban]: undefined,
  [Skill.Hiring]: undefined,
  [Skill.CoachingAndMentoring]: undefined,
  [Skill.HTML]: <Html />,
  [Skill.CSS]: <Css />,
  [Skill.Go]: <LanguageGo />,
  [Skill.UnitTesting]: undefined,
  [Skill.IntegrationTesting]: undefined,
  [Skill.E2ETesting]: undefined,
  [Skill.SASS]: <Sass />,
  [Skill.SQLServer]: <SqlServer />,
  [Skill.Kafka]: <ApacheKafka />,
  [Skill.GitLabCI]: <Gitlab />,
  [Skill.JavaScript]: <Javascript />,
  [Skill.AWSKinesis]: <AWSKinesis />,
  [Skill.AWSSQS]: <AWSSQS />,
  [Skill.AWSCognito]: <AWSCognito />,
  [Skill.GRPC]: <GRPC />,
  [Skill.Protobuf]: <Protobuf />,
};
