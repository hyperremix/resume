import RouterIcon from '@mui/icons-material/Router';
import { Skill } from 'experiences/Skill';
import * as React from 'react';
import { TExperience } from '../TExperience';

export const IotSuiteExperience: TExperience = {
  title: 'IoT Suite for Smart Heating',
  from: new Date('2022-11-01'),
  icon: <RouterIcon />,
  role: '',
  companyDescription: '',
  projectDescription: '',
  roleDescription: [],
  skills: [
    Skill.Kotlin,
    Skill.SpringBoot,
    Skill.PostgreSQL,
    Skill.Kafka,
    Skill.TypeScript,
    Skill.Vue,
    Skill.Kubernetes,
    Skill.Helm,
    Skill.AWSLambda,
    Skill.Docker,
    Skill.GitLabCI,
    Skill.Kibana,
    Skill.Grafana,
    Skill.Prometheus,
    Skill.SASS,
    Skill.Kanban,
    Skill.UnitTesting,
    Skill.IntegrationTesting,
    Skill.E2ETesting,
    Skill.Hiring,
    Skill.CoachingAndMentoring,
  ],
};
