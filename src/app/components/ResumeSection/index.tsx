import { Stack } from '@mui/material';
import * as React from 'react';
import { Children, ReactNode } from 'react';
import { ResumeTitle } from '../ResumeTitle';
import { TimelineWrapper } from '../TimelineWrapper';

type Props = {
  title: string;
  children?: ReactNode;
};

export const ResumeSection = ({ title, children }: Props) => (
  <Stack>
    <ResumeTitle title={title} />
    {children && (
      <Stack pl={4} gap={2} py={2} sx={{}}>
        {Children.map(children, (child) => (
          <TimelineWrapper>{child}</TimelineWrapper>
        ))}
      </Stack>
    )}
  </Stack>
);
