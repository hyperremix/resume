import dayjs from 'dayjs';
import i18next from 'i18next';
import { getSupportedLocale } from './getSupportedLocale';

export const getDateInFormat = (
  date?: string | number | Date | dayjs.Dayjs,
  format: string = 'LL',
  locale: string = i18next.language,
): string => {
  const supportedLocale = getSupportedLocale(locale);
  return dayjs(date).locale(supportedLocale).format(format);
};

export const getRelativeTime = (
  from: string | number | Date | dayjs.Dayjs,
  to: string | number | Date | dayjs.Dayjs = new Date(),
  locale: string = i18next.language,
): string => {
  const supportedLocale = getSupportedLocale(locale);
  const diff = dayjs(to).locale(supportedLocale).diff(from, 'year', true);
  const years = Math.floor(diff);
  const months = Math.floor((diff % 1) * 10) + 1;
  const yearsString = years > 0 ? `${Math.floor(years)} year${years > 1 ? 's' : ''}` : '';
  const monthsString = months > 0 ? `${Math.floor(months)} month${months > 1 ? 's' : ''}` : '';
  return `${yearsString} ${monthsString}`.trim();
};
