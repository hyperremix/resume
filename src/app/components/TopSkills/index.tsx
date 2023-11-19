import { Stack } from '@mui/material';
import { getSortedSkills } from 'experiences';
import { Skill } from 'experiences/Skill';
import { skillIcon } from 'experiences/skillIcon';
import * as React from 'react';
import { useEffect, useState } from 'react';

export const TopSkills = () => {
  const [top10Skills, setTop10Skills] = useState<{ skill: Skill; months: number }[]>([]);

  useEffect(() => setTop10Skills(getSortedSkills().slice(0, 14)), []);

  return (
    <Stack direction="row" gap={1} flexWrap="wrap">
      {top10Skills.map((skill) => skillIcon[skill.skill]())}
    </Stack>
  );
};
