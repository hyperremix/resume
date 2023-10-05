import SchoolIcon from '@mui/icons-material/School';
import { Stack } from '@mui/material';
import { ExperienceSection } from 'app/components/ExperienceSection';
import * as React from 'react';
import { skillIcon } from 'types/skillIcon';
import { MasterThesis } from './MasterThesis';

export const LundUniversity = () => (
  <ExperienceSection
    title="M.Sc. Computer Science"
    location="Lund University, Sweden"
    timePeriod="09/2009 - 06/2014"
    icon={<SchoolIcon />}
    skills={
      <Stack gap={1} direction="row" flexWrap="wrap">
        {skillIcon.Java}
      </Stack>
    }
  >
    <MasterThesis />
  </ExperienceSection>
);
