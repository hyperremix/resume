import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import { AppBar, Stack, Toolbar } from '@mui/material';
import * as React from 'react';
import { SocialMediaLink } from '../SocialMediaLink';

export const Footer = () => (
  <AppBar position="static" sx={{ boxShadow: 0 }}>
    <Toolbar sx={{ p: 0 }}>
      <Stack flex={1} py={1} direction="row" gap={1.5} flexWrap="wrap" justifyContent="center">
        <SocialMediaLink icon={<PlaceIcon />} title="Hamburg, Germany" />
        <SocialMediaLink
          icon={<GitHubIcon />}
          href="https://github.com/hyperremix"
          title="github.com/hyperremix"
        />
        <SocialMediaLink
          icon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/fredpe/"
          title="linkedin.com/in/fredpe"
        />
      </Stack>
    </Toolbar>
  </AppBar>
);
