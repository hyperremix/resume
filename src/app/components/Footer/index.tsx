import { AppBar, Toolbar } from '@mui/material';
import * as React from 'react';
import { SocialMediaLinks } from '../SocialMediaLinks';

export const Footer = () => (
  <AppBar position="static" sx={{ boxShadow: 0 }}>
    <Toolbar sx={{ p: 0 }}>
      <SocialMediaLinks />
    </Toolbar>
  </AppBar>
);
