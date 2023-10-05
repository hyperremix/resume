import { Stack, Typography } from '@mui/material';
import { ExperienceSection } from 'app/components/ExperienceSection';
import { Glasses } from 'mdi-material-ui';
import * as React from 'react';
import { Skill } from 'types/Skill';
import { skillIcon } from 'types/skillIcon';

export const GlassesRetailer = () => (
  <ExperienceSection
    title="Glasses Retailer"
    titleVariant="h6"
    role="Full-Stack Developer & Architect"
    timePeriod="04/2016 - 06/2018"
    icon={<Glasses />}
    companyDescription={<Typography>The number one optician company in Germany.</Typography>}
    projectDescription={
      <Typography>
        In the past, this company did not make much effort to innovate itself in the IT sector.
        However, with this project they wanted to change that. Agile methodologies, modern
        technologies and a skilled team was chosen to undertake this task, which started out as a
        small app for buying contact lenses, but developed into a fully-fledged in-store
        administration system with two native mobile apps as well as a web app.
      </Typography>
    }
    roleDescription={
      <Stack gap={1}>
        <Typography>
          During Fredriks first few months in this project, he concentrated on building a stable and
          reliable framework for implementing Selenium tests. At that time, the tests were only
          executed manually on the developer machines, which was a huge time consumer as the
          computer could not be used for anything else while the tests were running. The tests were
          also flaky, failing sometimes and sometimes not, although nothing changed. In the end the
          tests ran automatically on the build server after each commit and the only time tests
          failed, were when actual errors had been made by developers. Fredrik was also part of a
          special task force, which was created as it was found out that the application had
          performance issues. In this task force, Fredrik helped identify several pain points in the
          application which in different ways had an impact on the performance. Several action
          points were formed out of these findings and brought to the different teams in the project
          which in the end resulted in an improvement in performance of up to 80%! Parallel to these
          tasks, during the first year Fredrik was also an important part of the team which was
          responsible for the in-store administration application. As Scrum was used for the project
          methodology, Fredrik got to be part of defining stories, implementation as well as quality
          assurance. With time, Fredrik became the hub of information in the team, to whom outside
          stakeholders as well as team members would consult.
        </Typography>
        <Typography>
          For the second year, Fredrik was hand picked for the most strategically important project
          of 2017, internationalization. Along with another developer and a product owner, their
          task was to build a new team with the purpose of preparing the application to be able to
          handle multiple countries. Country specific product portfolios, localization, logistics as
          well as country specific features were some of the challenges that the team was engaged
          in. With the role of technical team lead, Fredrik guided the team through the course of
          the project. After two year of almost exclusive focus on features, the monolith backend,
          suffering from poor architectual choices, was starting to become harder to maintain and
          extend. As part of a hand picked group, Fredrik was tasked with taking the first step in
          modularizing the backend by extracting the employee management into a separate module.
          During the course of this project, Fredrik also took the responsibility in optimizing the
          build pipeline. First alleviating the dependency on Teamcity by introducing a build script
          (which was executed by Teamcity) and then making it possible to execute it on any
          operating system. In order to provide the teams with the information that was considered
          important, a customized build monitor was also built.
        </Typography>
      </Stack>
    }
    skills={
      <Stack direction="row" gap={1} flexWrap="wrap">
        {skillIcon[Skill.CSharp]}
        {skillIcon[Skill.TypeScript]}
        {skillIcon[Skill.Angular]}
        {skillIcon[Skill.CSS]}
        {skillIcon[Skill.HTML]}
        {skillIcon[Skill.DotNetCore]}
        {skillIcon[Skill.MongoDB]}
        {skillIcon[Skill.Docker]}
        {skillIcon[Skill.GitHub]}
        {skillIcon[Skill.TeamCity]}
        {skillIcon[Skill.Kibana]}
        {skillIcon[Skill.Scrum]}
        {skillIcon[Skill.UnitTesting]}
        {skillIcon[Skill.IntegrationTesting]}
        {skillIcon[Skill.E2ETesting]}
      </Stack>
    }
  />
);
