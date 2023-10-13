import { Box, useTheme } from '@mui/material';
import * as React from 'react';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const TimelineWrapper = ({ children }: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          background: theme.palette.text.primary,
          height: 50,
          width: 2,
          left: -24,
          top: -46,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          background: theme.palette.text.primary,
          height: 'calc(100% - 40px)',
          width: 2,
          left: -24,
          top: 32,
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
};
