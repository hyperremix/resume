import { translations } from '@/i18n';
import GitHub from '@/icons/tech/github';
import LinkedIn from '@/icons/tech/linkedin';
import PersonalWebsite from '@/icons/tech/personal-website';
import ResearchGate from '@/icons/tech/research-gate';
import { Link } from './Link';

export const socialMediaLinks: Link[] = [
  {
    label: 'github.com/hyperremix',
    icon: <GitHub />,
    href: 'https://github.com/hyperremix',
    ariaLabel: translations.githubProfileLabel,
  },
  {
    label: 'linkedin.com/in/fredpe',
    icon: <LinkedIn />,
    href: 'https://www.linkedin.com/in/fredpe/',
    ariaLabel: translations.linkedinProfileLabel,
  },
  {
    label: 'researchgate.net/publication',
    icon: <ResearchGate />,
    href: 'https://www.researchgate.net/publication/312490994_Using_the_Go_Programming_Language_in_Practice',
    ariaLabel: translations.researchGateProfileLabel,
  },
];

export const pdfSocialMediaLinks: Link[] = [
  {
    label: 'fredrik.pettersson-online.de',
    icon: <PersonalWebsite />,
    href: 'http://fredrik.pettersson-online.de',
    ariaLabel: translations.personalWebsiteLabel,
  },
  ...socialMediaLinks,
];
