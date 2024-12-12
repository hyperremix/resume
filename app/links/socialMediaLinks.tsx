import MapMarker from '@/icons/common/map-marker.svg?react';
import GitHub from '@/icons/tech/github.svg?react';
import LinkedIn from '@/icons/tech/linkedin.svg?react';
import ResearchGate from '@/icons/tech/research-gate.svg?react';
import { Link } from './Link';

export const socialMediaLinks: Link[] = [
  { label: 'Hamburg, Germany', icon: <MapMarker /> },
  {
    label: 'github.com/hyperremix',
    icon: <GitHub />,
    href: 'https://github.com/hyperremix',
  },
  {
    label: 'linkedin.com/in/fredpe',
    icon: <LinkedIn />,
    href: 'https://www.linkedin.com/in/fredpe/',
  },
  {
    label: 'researchgate.net/publication',
    icon: <ResearchGate />,
    href: 'https://www.researchgate.net/publication/312490994_Using_the_Go_Programming_Language_in_Practice',
  },
];
