export type TLocale = 'en' | 'de' | 'sv';

export const locales: TLocale[] = ['en', 'de', 'sv'];
export const defaultLocale: TLocale = 'en';

export const localeNames: Record<TLocale, string> = { en: 'English', de: 'Deutsch', sv: 'Svenska' };

export const isLocale = (value: string | undefined): value is TLocale =>
  locales.includes(value as TLocale);

const messages = {
  en: () => import('./messages/en.json'),
  de: () => import('./messages/de.json'),
  sv: () => import('./messages/sv.json'),
};

export const loadMessages = async (locale: TLocale) => (await messages[locale]()).default;

// Picks the supported language with the highest q-value from an Accept-Language style list, e.g. "sv-SE,sv;q=0.9,en;q=0.8"
export const negotiateLocale = (acceptLanguage = ''): TLocale =>
  acceptLanguage
    .split(',')
    .map((range) => ({
      language: range.split(';')[0].trim().split('-')[0].toLowerCase(),
      q: Number(/;\s*q=([\d.]+)/i.exec(range)?.[1] ?? 1),
    }))
    .filter(({ q }) => q > 0)
    .sort((a, b) => b.q - a.q)
    .map(({ language }) => language)
    .find(isLocale) ?? defaultLocale;

// Routes are defined with the English segment; the URL shows the localized one
const experiencesSegment: Record<TLocale, string> = {
  en: 'experiences',
  de: 'erfahrungen',
  sv: 'erfarenheter',
};

const replaceExperiencesSegment = (url: URL, toLocalized: boolean) => {
  const [, locale, segment, ...rest] = url.pathname.split('/');
  if (!isLocale(locale)) return url;

  const [from, to] = toLocalized
    ? [experiencesSegment.en, experiencesSegment[locale]]
    : [experiencesSegment[locale], experiencesSegment.en];
  if (segment !== from) return url;

  url.pathname = ['', locale, to, ...rest].join('/');
  return url;
};

export const localizedPathnames = {
  input: ({ url }: { url: URL }) => replaceExperiencesSegment(url, false),
  output: ({ url }: { url: URL }) => replaceExperiencesSegment(url, true),
};

// Same page in another locale, e.g. /en/experiences/netlight -> /sv/erfarenheter/netlight
export const localizedPathname = (pathname: string, locale: TLocale) => {
  const [, , ...rest] = pathname.split('/');
  const url = new URL(['', locale, ...rest.filter(Boolean)].join('/'), 'http://localhost');
  return localizedPathnames.output({ url }).pathname;
};
