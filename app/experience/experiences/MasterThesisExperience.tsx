import Axis from '@/icons/common/axis.svg?react';
import { Skill } from '@/skill/Skill';
import { TExperience } from '../TExperience';

export const MasterThesisExperience: TExperience = {
  slug: 'master-thesis',
  title: 'Axis Communications',
  from: new Date('2014-01-01'),
  to: new Date('2014-07-01'),
  icon: <Axis />,
  companyDescription:
    'Axis Communications is a Swedish manufacturer of network cameras for the physical security and video surveillance industries. The company is the market leader in this area and operates in several different market segments.',
  projectDescription: 'Using the Go Programming Language in Practice',
  roles: [
    {
      title: 'Master Thesis Student',
      description: [
        'At the time the company mostly developed their software using C, but started to glance at other, more modern, languages. The purpose of the thesis was to investigate the challenges of introducing Go as the main language for development of their software. Because the standard compiler for Go did not support the architecture in many companies products, the Go front-end to GCC (GNU Compiler Collection) was also to be investigated.',
        'The conclusion was that go is really easy to learn, it has great support for writing concurrent software, build tools (in comparison to C) are far easier and the builds are fast. Go also has a built-in package manager which makes it very easy to make use of third party libraries. However, the Go front-end to GCC was complicated to get to work in combination with the specific architecture that Axis is using.',
      ],
    },
  ],
  skills: [Skill.Go],
  highlightedSkills: [Skill.Go],
};
