import { Stack } from '@mui/material';
import * as React from 'react';
import { ReactNode } from 'react';
import { ResumeTitle } from '../ResumeTitle';

type Props = {
  title: string;
  children?: ReactNode;
};

export const ResumeSection = ({ title, children }: Props) => (
  <Stack>
    <ResumeTitle title={title} />
    {children && (
      <Stack py={2} gap={2}>
        {children}
      </Stack>
    )}
  </Stack>
);
