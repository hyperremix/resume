import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import { AppBar, Stack, Toolbar } from '@mui/material';
import { ResearchGate } from 'app/icons/ResearchGate';
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
        <SocialMediaLink
          icon={<ResearchGate />}
          href="https://www.researchgate.net/publication/312490994_Using_the_Go_Programming_Language_in_Practice"
          title="researchgate.net/publication"
        />
      </Stack>
    </Toolbar>
  </AppBar>
);
