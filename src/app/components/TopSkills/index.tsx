import { Stack } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { getSortedSkills } from 'state/experiences';
import { Skill } from 'types/Skill';
import { skillIcon } from 'types/skillIcon';

export const TopSkills = () => {
  const [top10Skills, setTop10Skills] = useState<{ skill: Skill; months: number }[]>([]);

  useEffect(() => setTop10Skills(getSortedSkills().slice(0, 13)), []);

  return (
    <Stack direction="row" gap={1} flexWrap="wrap">
      {top10Skills.map((skill) => skillIcon[skill.skill])}
    </Stack>
  );
};
