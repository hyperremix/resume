import { Skill } from 'experiences/Skill';
import { SetNone } from 'mdi-material-ui';
import * as React from 'react';
import { TExperience } from '../TExperience';

export const BrainwareGroupExperience: TExperience = {
  slug: 'brainwaregroup',
  title: 'BrainwareGroup',
  from: new Date('2014-09-01'),
  to: new Date('2016-04-01'),
  icon: <SetNone />,
  companyDescription:
    'Brainwaregroup is an international company, with headquarters Switzerland, that provides IT service- and contract management solutions. Companies like Vodafone, OMV, Linde, Allianz GI and ERGO are all long-time customers of Brainwaregroups wide arrange of products.',
  projectDescription: 'Automatic software recognition for an IT-licence compliance product',
  roles: [
    {
      title: 'Developer',
      description: [
        'The company had a small development team that struggled to keep up with customer demands while trying to innovate their products. Fredrik was hired to help alleviate this pressure by working on new projects as well as maintaining the existing code. Significant projects included implementing a command-line tool GUI, migrating from SourceSafe to Git, and integrating Elasticsearch. ',
        "The command-line tool GUI, initially Fredrik's idea, aimed to help the development team with easy debugging of numerous command-line tools. Its potential was quickly recognized, leading to more features being added, and it is now used company-wide.",
        'The company initially used Visual SourceSafe for version control, which made parallel work difficult due to poor branching and merging capabilities. Fredrik introduced Git and a new workflow and branching model, which have been successfully adopted and appreciated.',
        "To improve search performance in brainwaregroup's products, Fredrik mirrored the database in Elasticsearch. This switch allowed search queries to be directed to Elasticsearch instead of the database, providing nearly instant results.",
      ],
    },
  ],
  highlightedSkills: [Skill.CSharp, Skill.DotNetFramework, Skill.SQLServer],
  skills: [
    Skill.CSharp,
    Skill.HTML,
    Skill.CSS,
    Skill.JavaScript,
    Skill.DotNetFramework,
    Skill.SQLServer,
  ],
};
