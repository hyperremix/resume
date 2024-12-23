import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export type TLocale = 'en' | 'de' | 'sv';

export const routing = defineRouting({
  locales: ['en', 'de', 'sv'],
  defaultLocale: 'en',
  localeCookie: false,
  pathnames: {
    '/': '/',
    '/pdf': '/pdf',
    '/experiences/[slug]': {
      en: '/experiences/[slug]',
      de: '/erfahrungen/[slug]',
      sv: '/erfarenheter/[slug]',
    },
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
