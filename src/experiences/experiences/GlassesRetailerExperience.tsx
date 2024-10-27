import { Skill } from 'experiences/Skill';
import { Glasses } from 'mdi-material-ui';
import React from 'react';
import { TExperience } from '../TExperience';

export const GlassesRetailerExperience: TExperience = {
  slug: 'glasses-retailer',
  title: 'Glasses Retailer',
  from: new Date('2016-04-01'),
  to: new Date('2018-07-01'),
  icon: <Glasses />,
  companyDescription: 'The number one optician company in Germany.',
  projectDescription:
    'Digitilization of the in-store retail system for selling contact lens products for all establishments in the DACH region.',
  roles: [
    {
      title: 'Full-Stack Developer & Architect',
      description: [
        'Fredrik was part of the in-store administration application team. Using Scrum, he participated in defining stories, implementation, and quality assurance. Over time, he became a central point of information for both team members and external stakeholders. During his time on the project, Fredrik focused on stabilizing the Selenium test suite by creating a robust framework and automating its execution on the build server. Fredrik was also part of a special task force addressing performance issues in the application. He helped identify several pain points affecting performance, leading to action points that improved performance by up to 80%.',
        'Fredrik was selected for a strategically important project in 2017: internationalization. Together with another developer and a product owner, he helped form a new team to prepare the application for multiple countries. They tackled challenges like country-specific product portfolios, localization, logistics, and unique features. As the technical team lead, Fredrik guided the team throughout the project. After two years of focusing almost exclusively on features, the monolithic backend became difficult to maintain and extend due to poor architectural choices. Fredrik was part of a select group tasked with modularizing the backend, beginning with the extraction of the employee management system into a separate module. Fredrik also optimized the build pipeline by reducing dependency on TeamCity through a build script, making it executable on any operating system. Additionally, he built a customized build monitor to provide teams with essential information.',
      ],
    },
  ],
  highlightedSkills: [
    Skill.CSharp,
    Skill.DotNetFramework,
    Skill.JavaScript,
    Skill.AngularJS,
    Skill.MongoDB,
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
