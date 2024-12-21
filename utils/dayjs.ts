import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

export const getDateInFormat = (
  date?: string | number | Date | dayjs.Dayjs,
  format: string = 'LL',
): string => (!date ? 'Present' : dayjs(date).format(format));

export const getRelativeTime = (
  from: string | number | Date | dayjs.Dayjs,
  to: string | number | Date | dayjs.Dayjs = new Date(),
): string => {
  const diff = dayjs(to).diff(from, 'year', true);
  const years = Math.floor(diff);
  const months = Math.floor((diff % 1) * 10) + 1;
  const yearsString = years > 0 ? `${Math.floor(years)} year${years > 1 ? 's' : ''}` : '';
  const monthsString = months > 0 ? `${Math.floor(months)} month${months > 1 ? 's' : ''}` : '';
  return `${yearsString} ${monthsString}`.trim();
};

export const getMonthsBetween = (
  from: string | number | Date | dayjs.Dayjs,
  to: string | number | Date | dayjs.Dayjs = new Date(),
): number => dayjs(to).diff(from, 'month');
