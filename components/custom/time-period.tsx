import { translations } from '@/i18n';
import { useFormatter, useTranslations } from 'use-intl';
import { useMemo } from 'react';
import { Typography } from './typography';

type Props = {
  from: string;
  to?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export const TimePeriod = ({ from, to, className, ...props }: Props) => {
  const t = useTranslations();
  const format = useFormatter();

  const { years, months } = useMemo(() => {
    const fromDateTime = new Date(from);
    const toDateTime = to ? new Date(to) : new Date();

    let years = toDateTime.getFullYear() - fromDateTime.getFullYear();
    let months = toDateTime.getMonth() - fromDateTime.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  }, [from, to]);

  // ICU versions disagree on the German separator ("05.2025" vs "05/2025"), which breaks hydration
  const formatMonthYear = (date: string) =>
    format.dateTime(new Date(date), { month: '2-digit', year: 'numeric' }).replace('.', '/');

  return (
    <Typography className={`text-pink-500 ${className}`} {...props}>
      {`${formatMonthYear(from)} - ${
        to ? formatMonthYear(to) : t(translations.present)
      } | ${t(translations.duration, { years, months })}`}
    </Typography>
  );
};
