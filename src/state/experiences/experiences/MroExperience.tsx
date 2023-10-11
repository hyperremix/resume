import FlightIcon from '@mui/icons-material/Flight';
import { Typography } from '@mui/material';
import * as React from 'react';
import { Skill } from 'types/Skill';
import { TExperience } from '../TExperience';

export const MroExperience: TExperience = {
  title: 'Aviation MRO',
  from: new Date('2018-07-01'),
  to: new Date('2020-01-01'),
  icon: <FlightIcon />,
  role: 'Full-Stack Developer & DevOps',
  companyDescription:
    'A leading provider of maintenance, repair, overhaul and modification services for civil aircraft.',
  projectDescription:
    'An innovative and holistic platform that offers an extensive variety of digital products and services for MRO by combining multiple apps, web-based, and in one place.',
  roleDescription: (
    <Typography>
      A new developer experience team was founded with the purpose of raising the speed andquality
      of development in all teams of the project. During Fredriks time here, he developed concepts
      on how teams could easily test their applications using Cypress, introduced Helm to make
      deployments easier but also reproducable in their OpenShift environment, helped to set up
      SonarQube and Snyk in order to increase the code quality of all code produced in Aviatar,
      implented several golang-based prometheus-exporters, implemented a custom usabilla-jira
      connector using Kotlin, Quarkus and GraalVM, and developed a concept as well as a service for
      a safe and easy way to handle secrets in microservices using Hashicorp Vault. To share his
      knowledge Fredrik wrote documentation, blog posts, held several lightning talks and in some
      cases joined teams that required additional support.
    </Typography>
  ),
  skills: [
    Skill.Java,
    Skill.Kotlin,
    Skill.VertX,
    Skill.TypeScript,
    Skill.SASS,
    Skill.Angular,
    Skill.Go,
    Skill.Helm,
    Skill.Kubernetes,
    Skill.Docker,
    Skill.Cypress,
    Skill.Jenkins,
    Skill.Kibana,
    Skill.Grafana,
    Skill.Prometheus,
    Skill.Scrum,
    Skill.UnitTesting,
    Skill.E2ETesting,
  ],
};
