import { negotiateLocale } from '@/i18n/routing';
import { createIsomorphicFn } from '@tanstack/react-start';
import { getRequestHeader } from '@tanstack/react-start/server';
import { createFileRoute, redirect } from '@tanstack/react-router';

const getPreferredLocale = createIsomorphicFn()
  .server(() => negotiateLocale(getRequestHeader('accept-language')))
  .client(() => negotiateLocale(navigator.languages.join(',')));

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: '/$locale', params: { locale: getPreferredLocale() } });
  },
});
