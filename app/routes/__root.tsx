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
      <body className="min-h-screen bg-paper text-ink antialiased selection:bg-accent-soft">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
