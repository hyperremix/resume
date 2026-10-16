import { translations } from '@/i18n';
import { localeNames, localizedPathname, locales } from '@/i18n/routing';
import { Link, useLocation } from '@tanstack/react-router';
import { useLocale, useTranslations } from 'use-intl';

export const SiteHeader = () => {
  const t = useTranslations();
  const locale = useLocale();
  const { pathname } = useLocation();

  return (
    <header className="z-10 flex sm:sticky sm:top-0 flex-wrap items-baseline justify-between gap-x-6 gap-y-2 bg-paper/90 py-4 font-sans text-sm backdrop-blur sm:text-[15px]">
      <Link to="/$locale" params={{ locale }} className="font-serif text-lg text-ink">
        {t(translations.name)}
      </Link>
      <nav aria-label={t(translations.nav.label)} className="flex items-baseline gap-5">
        <ul aria-label={t(translations.nav.languages)} className="flex gap-3">
          {locales.map((candidate) => (
            <li key={candidate}>
              {candidate === locale ? (
                <span aria-current="true" className="underline decoration-rule underline-offset-4">
                  {localeNames[candidate]}
                </span>
              ) : (
                <a
                  href={localizedPathname(pathname, candidate)}
                  hrefLang={candidate}
                  lang={candidate}
                  className="text-muted hover:text-ink"
                >
                  {localeNames[candidate]}
                </a>
              )}
            </li>
          ))}
        </ul>
        <Link to="/$locale/pdf" params={{ locale }} className="text-muted hover:text-ink">
          {t(translations.nav.print)}
        </Link>
      </nav>
    </header>
  );
};
