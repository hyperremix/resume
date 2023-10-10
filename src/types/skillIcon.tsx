import { Javascript } from '@mui/icons-material';
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
import { Kibana } from 'app/icons/Kibana';
import { MongoDB } from 'app/icons/MongoDB';
import { NestJS } from 'app/icons/NestJS';
import { OpenShift } from 'app/icons/OpenShift';
import { Sentry } from 'app/icons/Sentry';
import { ServerlessFramework } from 'app/icons/ServerlessFramework';
import { Splunk } from 'app/icons/Splunk';
import { SqlServer } from 'app/icons/SqlServer';
import {
  Angular,
  ApacheKafka,
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
import { ReactNode } from 'react';
import { Skill } from './Skill';

export const skillIcon: Record<Skill, ReactNode> = {
  [Skill.TypeScript]: (
    <Chip icon={<LanguageTypescript />} label={Skill.TypeScript} key={Skill.TypeScript} />
  ),
  [Skill.Java]: <Chip icon={<LanguageJava />} label={Skill.Java} key={Skill.Java} />,
  [Skill.Kotlin]: <Chip icon={<LanguageKotlin />} label={Skill.Kotlin} key={Skill.Kotlin} />,
  [Skill.CSharp]: <Chip icon={<LanguageCsharp />} label={Skill.CSharp} key={Skill.CSharp} />,
  [Skill.Vue]: <Chip icon={<Vuejs />} label={Skill.Vue} key={Skill.Vue} />,
  [Skill.React]: <Chip icon={<Reactjs />} label={Skill.React} key={Skill.React} />,
  [Skill.ReactNative]: (
    <Chip icon={<Reactjs />} label={Skill.ReactNative} key={Skill.ReactNative} />
  ),
  [Skill.NestJS]: <Chip icon={<NestJS />} label={Skill.NestJS} key={Skill.NestJS} />,
  [Skill.ServerlessFramework]: (
    <Chip
      icon={<ServerlessFramework />}
      label={Skill.ServerlessFramework}
      key={Skill.ServerlessFramework}
    />
  ),
  [Skill.SpringBoot]: <Chip icon={<Leaf />} label={Skill.SpringBoot} key={Skill.SpringBoot} />,
  [Skill.Angular]: <Chip icon={<Angular />} label={Skill.Angular} key={Skill.Angular} />,
  [Skill.AngularJS]: <Chip icon={<Angular />} label={Skill.AngularJS} key={Skill.AngularJS} />,
  [Skill.Helm]: <Chip icon={<Helm />} label={Skill.Helm} key={Skill.Helm} />,
  [Skill.VertX]: <Chip label={Skill.VertX} key={Skill.VertX} />,
  [Skill.DotNetFramework]: (
    <Chip icon={<DotNet />} label={Skill.DotNetFramework} key={Skill.DotNetFramework} />
  ),
  [Skill.MongoDB]: <Chip icon={<MongoDB />} label={Skill.MongoDB} key={Skill.MongoDB} />,
  [Skill.PostgreSQL]: <Chip icon={<Elephant />} label={Skill.PostgreSQL} key={Skill.PostgreSQL} />,
  [Skill.AWSDynamoDB]: (
    <Chip icon={<AWSDynamoDB />} label={Skill.AWSDynamoDB} key={Skill.AWSDynamoDB} />
  ),
  [Skill.GitHubActions]: (
    <Chip icon={<Github />} label={Skill.GitHubActions} key={Skill.GitHubActions} />
  ),
  [Skill.Jenkins]: <Chip icon={<Jenkins />} label={Skill.Jenkins} key={Skill.Jenkins} />,
  [Skill.TeamCity]: <Chip label={Skill.TeamCity} key={Skill.TeamCity} />,
  [Skill.Kubernetes]: (
    <Chip icon={<Kubernetes />} label={Skill.Kubernetes} key={Skill.Kubernetes} />
  ),
  [Skill.OpenShift]: <Chip icon={<OpenShift />} label={Skill.OpenShift} key={Skill.OpenShift} />,
  [Skill.Sentry]: <Chip icon={<Sentry />} label={Skill.Sentry} key={Skill.Sentry} />,
  [Skill.Datadog]: <Chip icon={<Datadog />} label={Skill.Datadog} key={Skill.Datadog} />,
  [Skill.Kibana]: <Chip icon={<Kibana />} label={Skill.Kibana} key={Skill.Kibana} />,
  [Skill.Grafana]: <Chip icon={<Grafana />} label={Skill.Grafana} key={Skill.Grafana} />,
  [Skill.Splunk]: <Chip icon={<Splunk />} label={Skill.Splunk} key={Skill.Splunk} />,
  [Skill.Prometheus]: <Chip icon={<Torch />} label={Skill.Prometheus} key={Skill.Prometheus} />,
  [Skill.Cypress]: <Chip icon={<Cypress />} label={Skill.Cypress} key={Skill.Cypress} />,
  [Skill.Playwright]: (
    <Chip icon={<DramaMasks />} label={Skill.Playwright} key={Skill.Playwright} />
  ),
  [Skill.AWSLambda]: <Chip icon={<AWSLambda />} label={Skill.AWSLambda} key={Skill.AWSLambda} />,
  [Skill.AWSAmplify]: (
    <Chip icon={<AWSAmplify />} label={Skill.AWSAmplify} key={Skill.AWSAmplify} />
  ),
  [Skill.AWSS3]: <Chip icon={<AWSS3 />} label={Skill.AWSS3} key={Skill.AWSS3} />,
  [Skill.Expo]: <Chip icon={<Expo />} label={Skill.Expo} key={Skill.Expo} />,
  [Skill.Docker]: <Chip icon={<Docker />} label={Skill.Docker} key={Skill.Docker} />,
  [Skill.Auth0]: <Chip icon={<Auth0 />} label={Skill.Auth0} key={Skill.Auth0} />,
  [Skill.Keycloak]: <Chip icon={<KeyIcon />} label={Skill.Keycloak} key={Skill.Keycloak} />,
  [Skill.Scrum]: <Chip label={Skill.Scrum} key={Skill.Scrum} />,
  [Skill.Kanban]: <Chip label={Skill.Kanban} key={Skill.Kanban} />,
  [Skill.Hiring]: <Chip label={Skill.Hiring} key={Skill.Hiring} />,
  [Skill.CoachingAndMentoring]: (
    <Chip label={Skill.CoachingAndMentoring} key={Skill.CoachingAndMentoring} />
  ),
  [Skill.HTML]: <Chip icon={<Html />} label={Skill.HTML} key={Skill.HTML} />,
  [Skill.CSS]: <Chip icon={<Css />} label={Skill.CSS} key={Skill.CSS} />,
  [Skill.Go]: <Chip icon={<LanguageGo />} label={Skill.Go} key={Skill.Go} />,
  [Skill.UnitTesting]: <Chip label={Skill.UnitTesting} key={Skill.UnitTesting} />,
  [Skill.IntegrationTesting]: (
    <Chip label={Skill.IntegrationTesting} key={Skill.IntegrationTesting} />
  ),
  [Skill.E2ETesting]: <Chip label={Skill.E2ETesting} key={Skill.E2ETesting} />,
  [Skill.SASS]: <Chip icon={<Sass />} label={Skill.SASS} key={Skill.SASS} />,
  [Skill.SQLServer]: <Chip icon={<SqlServer />} label={Skill.SQLServer} key={Skill.SQLServer} />,
  [Skill.Kafka]: <Chip icon={<ApacheKafka />} label={Skill.Kafka} key={Skill.Kafka} />,
  [Skill.GitLabCI]: <Chip icon={<Gitlab />} label={Skill.GitLabCI} key={Skill.GitLabCI} />,
  [Skill.JavaScript]: (
    <Chip icon={<Javascript />} label={Skill.JavaScript} key={Skill.JavaScript} />
  ),
};
