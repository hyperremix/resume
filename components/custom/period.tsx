import { getMonthsBetween } from '@/experience';
import { translations } from '@/i18n';
import { useTranslations } from 'use-intl';

type Props = {
  from: string;
  to?: string;
};

// Dates are ISO strings read in UTC so the month never shifts with the visitor's time zone
const yearOf = (date: string) => new Date(date).getUTCFullYear();
const monthOf = (date: string) => new Date(date).getUTCMonth() + 1;

// "Oct 2024 – Apr 2025" or "May 2025 – today". Month names come from the messages,
// so server and client render the same markup whatever ICU version they ship with.
export const useFormatMonthRange = () => {
  const t = useTranslations();
  const monthYear = (date: string) =>
    `${t(translations.month[String(monthOf(date)) as keyof typeof translations.month])} ${yearOf(date)}`;

  return (from: string, to?: string) =>
    `${monthYear(from)} – ${to ? monthYear(to) : t(translations.present)}`;
};

export const MonthRange = ({ from, to }: Props) => {
  const formatMonthRange = useFormatMonthRange();

  return <>{formatMonthRange(from, to)}</>;
};

// "9 years 1 month"
export const Duration = ({ from, to }: Props) => {
  const t = useTranslations();
  const months = getMonthsBetween(from, to);

  return <>{t(translations.duration, { years: Math.floor(months / 12), months: months % 12 })}</>;
};

// "Oct 2024 – Apr 2025, 6 months"
export const PeriodDetail = ({ from, to }: Props) => (
  <>
    <MonthRange from={from} to={to} />, <Duration from={from} to={to} />
  </>
);
