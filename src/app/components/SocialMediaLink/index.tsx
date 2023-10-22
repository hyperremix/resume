import { Link, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { ReactNode } from 'react';

type Props = {
  href?: string;
  icon: ReactNode;
  title: string;
};

export const SocialMediaLink = ({ href, icon, title }: Props) => (
  <>
    {href ? (
      <Link href={href} color="inherit" underline="hover" target="_blank">
        <Stack direction="row" gap={1}>
          {icon}
          <Typography>{title}</Typography>
        </Stack>
      </Link>
    ) : (
      <Stack direction="row" gap={1}>
        {icon}
        <Typography>{title}</Typography>
      </Stack>
    )}
  </>
);
