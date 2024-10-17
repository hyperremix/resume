import { Chip } from '@mui/material';
import { Skill } from 'experiences/Skill';
import { skillIcon } from 'experiences/skillIcon';
import * as React from 'react';

type Props = {
  skill: Skill;
};

export const ExperienceChip = ({ skill }: Props) => (
  <Chip
    sx={{ pl: skillIcon[skill] ? 1 : 0 }}
    icon={skillIcon[skill]}
    label={skill}
    variant="outlined"
  />
);
