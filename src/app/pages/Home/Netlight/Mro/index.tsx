import FlightIcon from '@mui/icons-material/Flight';
import { Stack, Typography } from '@mui/material';
import { ExperienceSection } from 'app/components/ExperienceSection';
import * as React from 'react';
import { Skill } from 'types/Skill';
import { skillIcon } from 'types/skillIcon';

export const Mro = () => (
  <ExperienceSection
    title="Aviation MRO"
    titleVariant="h6"
    role="Full-Stack Developer & DevOps"
    timePeriod="07/2018 - 12/2019"
    icon={<FlightIcon />}
    companyDescription={
      <Typography>
        A leading provider of maintenance, repair, overhaul and modification services for civil
        aircraft.
      </Typography>
    }
    projectDescription={
      <Typography>
        An innovative and holistic platform that offers an extensive variety of digital products and
        services for MRO by combining multiple apps, web-based, and in one place.
      </Typography>
    }
    roleDescription={
      <Typography>
        A new developer experience team was founded with the purpose of raising the speed and
        quality of development in all teams of the project. During Fredriks time here, he developed
        concepts on how teams could easily test their applications using Cypress, introduced Helm to
        make deployments easier but also reproducable in their OpenShift environment, helped to set
        up SonarQube and Snyk in order to increase the code quality of all code produced in Aviatar,
        implented several golang-based prometheus-exporters, implemented a custom usabilla-jira
        connector using Kotlin, Quarkus and GraalVM, and developed a concept as well as a service
        for a safe and easy way to handle secrets in microservices using Hashicorp Vault. To share
        his knowledge Fredrik wrote documentation, blog posts, held several lightning talks and in
        some cases joined teams that required additional support.
      </Typography>
    }
    skills={
      <Stack direction="row" gap={1} flexWrap="wrap">
        {skillIcon[Skill.Java]}
        {skillIcon[Skill.Kotlin]}
        {skillIcon[Skill.SpringBoot]}
        {skillIcon[Skill.TypeScript]}
        {skillIcon[Skill.Angular]}
        {skillIcon[Skill.NestJS]}
        {skillIcon[Skill.Cypress]}
        {skillIcon[Skill.Jenkins]}
        {skillIcon[Skill.Splunk]}
        {skillIcon[Skill.Datadog]}
        {skillIcon[Skill.Kanban]}
        {skillIcon[Skill.UnitTesting]}
        {skillIcon[Skill.IntegrationTesting]}
        {skillIcon[Skill.E2ETesting]}
      </Stack>
    }
  />
);
