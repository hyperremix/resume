import { translations } from '@/i18n';
import { isLocale, loadMessages, localizedPathname, locales, TLocale } from '@/i18n/routing';
import { createIsomorphicFn } from '@tanstack/react-start';
import { getRequestUrl } from '@tanstack/react-start/server';
import { Outlet, createFileRoute, notFound } from '@tanstack/react-router';
import { IntlProvider, Messages, createTranslator } from 'use-intl';

const getOrigin = createIsomorphicFn()
  .server(() => getRequestUrl({ xForwardedHost: true, xForwardedProto: true }).origin)
  .client(() => window.location.origin);

export const Route = createFileRoute('/$locale')({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) {
      throw notFound();
    }
  },
  loader: async ({ params }) => ({
    messages: await loadMessages(params.locale as TLocale),
    origin: getOrigin(),
  }),
  head: ({ params, loaderData, matches }) => {
    if (!loaderData) return {};

    const t = createTranslator<Messages>({ locale: params.locale, messages: loaderData.messages });

    return {
      meta: [
        { title: t(translations.name) },
        { name: 'description', content: t(translations.metadata.description) },
      ],
      links: [
        ...locales.map((locale) => ({
          rel: 'alternate',
          hrefLang: locale,
          href: `${loaderData.origin}${localizedPathname(matches[matches.length - 1].pathname, locale)}`,
        })),
        { rel: 'alternate', hrefLang: 'x-default', href: `${loaderData.origin}/` },
      ],
    };
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  const { locale } = Route.useParams();
  const { messages } = Route.useLoaderData();

  return (
    <IntlProvider locale={locale} messages={messages} timeZone="UTC">
      <Outlet />
    </IntlProvider>
  );
}
