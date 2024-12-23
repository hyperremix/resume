import { translations } from '@/i18n';
import { routing, TLocale } from '@/i18n/routing';
import { PostHogProvider } from '@/providers/posthog-provider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale;

  if (!routing.locales.includes(locale as TLocale)) {
    notFound();
  }

  const t = await getTranslations({ locale });

  return {
    title: t(translations.name),
    description: t(translations.metadata.description),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const RootLayout = async ({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) => {
  const locale = (await params).locale;

  if (!routing.locales.includes(locale as TLocale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-zinc-200 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300 fill-zinc-800 dark:fill-zinc-300 border-zinc-300 dark:border-zinc-800 selection:bg-pink-700/80 selection:text-zinc-300 px-1">
        <main>
          <NextIntlClientProvider messages={messages}>
            <PostHogProvider>{children}</PostHogProvider>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
