import { defaultLocale, isLocale } from '@/i18n/routing';
import { HeadContent, Outlet, Scripts, createRootRoute, useParams } from '@tanstack/react-router';
import globalsCss from '../globals.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [
      { rel: 'stylesheet', href: globalsCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  component: Outlet,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { locale } = useParams({ strict: false });

  return (
    <html lang={isLocale(locale) ? locale : defaultLocale}>
      <head>
        <HeadContent />
      </head>
      <body className="bg-zinc-200 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300 fill-zinc-800 dark:fill-zinc-300 border-zinc-300 dark:border-zinc-800 selection:bg-pink-700/80 selection:text-zinc-300 px-1">
        <main>{children}</main>
        <Scripts />
      </body>
    </html>
  );
}
