import { Box } from '@mui/material';
import * as React from 'react';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const TimelineWrapper = ({ children }: Props) => (
  <Box
    sx={{
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        background: 'white',
        height: 40,
        width: 2,
        left: 11,
        top: -40,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        background: 'white',
        height: 'calc(100% - 40px)',
        width: 2,
        left: 11,
        top: 40,
      },
      '&:last-child::after': {
        display: 'none',
      },
      '&:first-child::before': {
        display: 'none',
      },
    }}
  >
    {children}
  </Box>
);
