import { Javascript } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';
import { Chip, ChipProps } from '@mui/material';
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

export const skillIcon: Record<Skill, (props?: ChipProps) => ReactNode> = {
  [Skill.TypeScript]: (props) => (
    <Chip
      icon={<LanguageTypescript />}
      label={Skill.TypeScript}
      key={Skill.TypeScript}
      {...props}
    />
  ),
  [Skill.Java]: (props) => (
    <Chip icon={<LanguageJava />} label={Skill.Java} key={Skill.Java} {...props} />
  ),
  [Skill.Kotlin]: (props) => (
    <Chip icon={<LanguageKotlin />} label={Skill.Kotlin} key={Skill.Kotlin} {...props} />
  ),
  [Skill.CSharp]: (props) => (
    <Chip icon={<LanguageCsharp />} label={Skill.CSharp} key={Skill.CSharp} {...props} />
  ),
  [Skill.Vue]: (props) => <Chip icon={<Vuejs />} label={Skill.Vue} key={Skill.Vue} {...props} />,
  [Skill.React]: (props) => (
    <Chip icon={<Reactjs />} label={Skill.React} key={Skill.React} {...props} />
  ),
  [Skill.ReactNative]: (props) => (
    <Chip icon={<Reactjs />} label={Skill.ReactNative} key={Skill.ReactNative} {...props} />
  ),
  [Skill.NestJS]: (props) => (
    <Chip icon={<NestJS />} label={Skill.NestJS} key={Skill.NestJS} {...props} />
  ),
  [Skill.ServerlessFramework]: (props) => (
    <Chip
      icon={<ServerlessFramework />}
      label={Skill.ServerlessFramework}
      key={Skill.ServerlessFramework}
      {...props}
    />
  ),
  [Skill.SpringBoot]: (props) => (
    <Chip icon={<Leaf />} label={Skill.SpringBoot} key={Skill.SpringBoot} {...props} />
  ),
  [Skill.Angular]: (props) => (
    <Chip icon={<Angular />} label={Skill.Angular} key={Skill.Angular} {...props} />
  ),
  [Skill.AngularJS]: (props) => (
    <Chip icon={<Angular />} label={Skill.AngularJS} key={Skill.AngularJS} {...props} />
  ),
  [Skill.Helm]: (props) => <Chip icon={<Helm />} label={Skill.Helm} key={Skill.Helm} {...props} />,
  [Skill.VertX]: (props) => <Chip label={Skill.VertX} key={Skill.VertX} {...props} />,
  [Skill.DotNetFramework]: (props) => (
    <Chip icon={<DotNet />} label={Skill.DotNetFramework} key={Skill.DotNetFramework} {...props} />
  ),
  [Skill.MongoDB]: (props) => (
    <Chip icon={<MongoDB />} label={Skill.MongoDB} key={Skill.MongoDB} {...props} />
  ),
  [Skill.PostgreSQL]: (props) => (
    <Chip icon={<Elephant />} label={Skill.PostgreSQL} key={Skill.PostgreSQL} {...props} />
  ),
  [Skill.AWSDynamoDB]: (props) => (
    <Chip icon={<AWSDynamoDB />} label={Skill.AWSDynamoDB} key={Skill.AWSDynamoDB} {...props} />
  ),
  [Skill.GitHubActions]: (props) => (
    <Chip icon={<Github />} label={Skill.GitHubActions} key={Skill.GitHubActions} {...props} />
  ),
  [Skill.Jenkins]: (props) => (
    <Chip icon={<Jenkins />} label={Skill.Jenkins} key={Skill.Jenkins} {...props} />
  ),
  [Skill.TeamCity]: (props) => <Chip label={Skill.TeamCity} key={Skill.TeamCity} {...props} />,
  [Skill.Kubernetes]: (props) => (
    <Chip icon={<Kubernetes />} label={Skill.Kubernetes} key={Skill.Kubernetes} {...props} />
  ),
  [Skill.OpenShift]: (props) => (
    <Chip icon={<OpenShift />} label={Skill.OpenShift} key={Skill.OpenShift} {...props} />
  ),
  [Skill.Sentry]: (props) => (
    <Chip icon={<Sentry />} label={Skill.Sentry} key={Skill.Sentry} {...props} />
  ),
  [Skill.Datadog]: (props) => (
    <Chip icon={<Datadog />} label={Skill.Datadog} key={Skill.Datadog} {...props} />
  ),
  [Skill.Kibana]: (props) => (
    <Chip icon={<Kibana />} label={Skill.Kibana} key={Skill.Kibana} {...props} />
  ),
  [Skill.Grafana]: (props) => (
    <Chip icon={<Grafana />} label={Skill.Grafana} key={Skill.Grafana} {...props} />
  ),
  [Skill.Splunk]: (props) => (
    <Chip icon={<Splunk />} label={Skill.Splunk} key={Skill.Splunk} {...props} />
  ),
  [Skill.Prometheus]: (props) => (
    <Chip icon={<Torch />} label={Skill.Prometheus} key={Skill.Prometheus} {...props} />
  ),
  [Skill.Cypress]: (props) => (
    <Chip icon={<Cypress />} label={Skill.Cypress} key={Skill.Cypress} {...props} />
  ),
  [Skill.Playwright]: (props) => (
    <Chip icon={<DramaMasks />} label={Skill.Playwright} key={Skill.Playwright} {...props} />
  ),
  [Skill.AWSLambda]: (props) => (
    <Chip icon={<AWSLambda />} label={Skill.AWSLambda} key={Skill.AWSLambda} {...props} />
  ),
  [Skill.AWSAmplify]: (props) => (
    <Chip icon={<AWSAmplify />} label={Skill.AWSAmplify} key={Skill.AWSAmplify} {...props} />
  ),
  [Skill.AWSS3]: (props) => (
    <Chip icon={<AWSS3 />} label={Skill.AWSS3} key={Skill.AWSS3} {...props} />
  ),
  [Skill.Expo]: (props) => <Chip icon={<Expo />} label={Skill.Expo} key={Skill.Expo} {...props} />,
  [Skill.Docker]: (props) => (
    <Chip icon={<Docker />} label={Skill.Docker} key={Skill.Docker} {...props} />
  ),
  [Skill.Auth0]: (props) => (
    <Chip icon={<Auth0 />} label={Skill.Auth0} key={Skill.Auth0} {...props} />
  ),
  [Skill.Keycloak]: (props) => (
    <Chip icon={<KeyIcon />} label={Skill.Keycloak} key={Skill.Keycloak} {...props} />
  ),
  [Skill.Scrum]: (props) => <Chip label={Skill.Scrum} key={Skill.Scrum} {...props} />,
  [Skill.Kanban]: (props) => <Chip label={Skill.Kanban} key={Skill.Kanban} {...props} />,
  [Skill.Hiring]: (props) => <Chip label={Skill.Hiring} key={Skill.Hiring} {...props} />,
  [Skill.CoachingAndMentoring]: (props) => (
    <Chip label={Skill.CoachingAndMentoring} key={Skill.CoachingAndMentoring} {...props} />
  ),
  [Skill.HTML]: (props) => <Chip icon={<Html />} label={Skill.HTML} key={Skill.HTML} {...props} />,
  [Skill.CSS]: (props) => <Chip icon={<Css />} label={Skill.CSS} key={Skill.CSS} {...props} />,
  [Skill.Go]: (props) => <Chip icon={<LanguageGo />} label={Skill.Go} key={Skill.Go} {...props} />,
  [Skill.UnitTesting]: (props) => (
    <Chip label={Skill.UnitTesting} key={Skill.UnitTesting} {...props} />
  ),
  [Skill.IntegrationTesting]: (props) => (
    <Chip label={Skill.IntegrationTesting} key={Skill.IntegrationTesting} {...props} />
  ),
  [Skill.E2ETesting]: (props) => (
    <Chip label={Skill.E2ETesting} key={Skill.E2ETesting} {...props} />
  ),
  [Skill.SASS]: (props) => <Chip icon={<Sass />} label={Skill.SASS} key={Skill.SASS} {...props} />,
  [Skill.SQLServer]: (props) => (
    <Chip icon={<SqlServer />} label={Skill.SQLServer} key={Skill.SQLServer} {...props} />
  ),
  [Skill.Kafka]: (props) => (
    <Chip icon={<ApacheKafka />} label={Skill.Kafka} key={Skill.Kafka} {...props} />
  ),
  [Skill.GitLabCI]: (props) => (
    <Chip icon={<Gitlab />} label={Skill.GitLabCI} key={Skill.GitLabCI} {...props} />
  ),
  [Skill.JavaScript]: (props) => (
    <Chip icon={<Javascript />} label={Skill.JavaScript} key={Skill.JavaScript} {...props} />
  ),
};
