import VideocamIcon from '@mui/icons-material/Videocam';
import { Button, Stack, Typography } from '@mui/material';
import { ExperienceSection } from 'app/components/ExperienceSection';
import * as React from 'react';
import { Skill } from 'types/Skill';
import { skillIcon } from 'types/skillIcon';

export const MasterThesis = () => (
  <ExperienceSection
    title="Axis Communications"
    titleVariant="h6"
    role="Master Thesis Student"
    timePeriod="01/2014 - 06/2014"
    icon={<VideocamIcon />}
    companyDescription={
      <Typography>
        Axis Communications is a Swedish manufacturer of network cameras for the physical security
        and video surveillance industries. The company is the market leader in this area and
        operates in several different market segments.
      </Typography>
    }
    projectDescription={<Typography>Using the Go Programming Language in Practice</Typography>}
    roleDescription={
      <Stack gap={1} alignItems="flex-start">
        <Typography>
          At the time the company mostly developed their software using C, but started to glance at
          other, more modern, languages. The purpose of the thesis was to investigate the challenges
          of introducing Go as the main language for development of their software. Because the
          standard compiler for Go did not support the architecture in many companies products, the
          Go front-end to GCC (GNU Compiler Collection) was also to be investigated.
        </Typography>
        <Typography>
          The conclusion was that go is really easy to learn, it has great support for writing
          concurrent software, build tools (in comparison to C) are far easier and the builds are
          fast. Go also has a built-in package manager which makes it very easy to make use of third
          party libraries. However, the Go front-end to GCC was complicated to get to work in
          combination with the specific architecture that Axis is using.
        </Typography>
        <Button
          href="https://www.researchgate.net/publication/312490994_Using_the_Go_Programming_Language_in_Practice"
          target="_blank"
        >
          Learn more
        </Button>
      </Stack>
    }
    skills={
      <Stack direction="row" gap={1} flexWrap="wrap">
        {skillIcon[Skill.Go]}
      </Stack>
    }
  />
);
