import { Skill } from 'experiences/Skill';
import { Glasses } from 'mdi-material-ui';
import React from 'react';
import { TExperience } from '../TExperience';

export const GlassesRetailerExperience: TExperience = {
  title: 'Glasses Retailer',
  from: new Date('2016-04-01'),
  to: new Date('2018-07-01'),
  icon: <Glasses />,
  role: 'Full-Stack Developer & Architect',
  companyDescription: 'The number one optician company in Germany.',
  projectDescription:
    'In the past, this company did not make much effort to innovate itself in the IT sector. However, with this project they wanted to change that. Agile methodologies, modern technologies and a skilled team was chosen to undertake this task, which started out as a small app for buying contact lenses, but developed into a fully-fledged in-store administration system with two native mobile apps as well as a web app.',
  roleDescription: [
    'During Fredriks first few months in this project, he concentrated on building a stable and reliable framework for implementing Selenium tests. At that time, the tests were only executed manually on the developer machines, which was a huge time consumer as the computer could not be used for anything else while the tests were running. The tests were also flaky, failing sometimes and sometimes not, although nothing changed. In the end the tests ran automatically on the build server after each commit and the only time tests failed, were when actual errors had been made by developers.',
    'Fredrik was also part of a special task force, which was created as it was found out that the application had performance issues. In this task force, Fredrik helped identify several pain points in the application which in different ways had an impact on the performance. Several action points were formed out of these findings and brought to the different teams in the project which in the end resulted in an improvement in performance of up to 80%! Parallel to these tasks, during the first year Fredrik was also an important part of the team which was responsible for the in-store administration application. As Scrum was used for the project methodology, Fredrik got to be part of defining stories, implementation as well as quality assurance. With time, Fredrik became the hub of information in the team, to whom outside stakeholders as well as team members would consult.',
  ],
  skills: [
    Skill.CSharp,
    Skill.JavaScript,
    Skill.AngularJS,
    Skill.CSS,
    Skill.HTML,
    Skill.DotNetFramework,
    Skill.MongoDB,
    Skill.Docker,
    Skill.TeamCity,
    Skill.Kibana,
    Skill.Scrum,
    Skill.UnitTesting,
    Skill.IntegrationTesting,
    Skill.E2ETesting,
  ],
};
