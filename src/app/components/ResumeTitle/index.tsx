import { Divider, Stack, Typography } from '@mui/material';
import * as React from 'react';

type Props = {
  title: string;
};

export const ResumeTitle = ({ title }: Props) => (
  <>
    <Typography variant="h4">{title}</Typography>
    <Stack pb={1}>
      <Divider />
    </Stack>
  </>
);
