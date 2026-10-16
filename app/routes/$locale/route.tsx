import { translations } from '@/i18n';
import { isLocale, loadMessages, TLocale } from '@/i18n/routing';
import { Outlet, createFileRoute, notFound } from '@tanstack/react-router';
import { IntlProvider, Messages, createTranslator } from 'use-intl';

export const Route = createFileRoute('/$locale')({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) {
      throw notFound();
    }
  },
  loader: async ({ params }) => ({
    messages: await loadMessages(params.locale as TLocale),
  }),
  head: ({ params, loaderData }) => {
    if (!loaderData) return {};

    const t = createTranslator<Messages>({ locale: params.locale, messages: loaderData.messages });

    return {
      meta: [
        { title: t(translations.name) },
        { name: 'description', content: t(translations.metadata.description) },
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
