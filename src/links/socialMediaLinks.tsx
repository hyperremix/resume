import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import { ResearchGate } from 'app/icons/ResearchGate';
import React from 'react';
import { Link } from './Link';

export const socialMediaLinks: Link[] = [
  { label: 'Hamburg, Germany', icon: <PlaceIcon /> },
  { label: 'github.com/hyperremix', icon: <GitHubIcon />, href: 'https://github.com/hyperremix' },
  {
    label: 'linkedin.com/in/fredpe',
    icon: <LinkedInIcon />,
    href: 'https://www.linkedin.com/in/fredpe/',
  },
  {
    label: 'researchgate.net/publication',
    icon: <ResearchGate />,
    href: 'https://www.researchgate.net/publication/312490994_Using_the_Go_Programming_Language_in_Practice',
  },
];
