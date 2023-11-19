import { Link, Stack, Typography } from '@mui/material';
import { socialMediaLinks } from 'links/socialMediaLinks';
import React, { ReactNode } from 'react';

export const SocialMediaLinks = () => (
  <Stack flex={1} py={1} direction="row" gap={1.5} flexWrap="wrap" justifyContent="center">
    {socialMediaLinks.map((link) => (
      <SocialMediaLink {...link} />
    ))}
  </Stack>
);

type Props = {
  label: string;
  icon: ReactNode;
  href?: string;
};

const SocialMediaLink = ({ href, icon, label }: Props) => (
  <>
    {href ? (
      <Link href={href} color="inherit" underline="hover" target="_blank">
        <Stack direction="row" gap={1}>
          {icon}
          <Typography>{label}</Typography>
        </Stack>
      </Link>
    ) : (
      <Stack direction="row" gap={1}>
        {icon}
        <Typography>{label}</Typography>
      </Stack>
    )}
  </>
);
