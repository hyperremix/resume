'use client';

import { translations } from '@/i18n';
import { useFormatter, useTranslations } from 'next-intl';
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

  return (
    <Typography className={`text-pink-500 ${className}`} {...props}>
      {`${format.dateTime(new Date(from), {
        month: '2-digit',
        year: 'numeric',
      })} - ${
        to
          ? format.dateTime(new Date(to), {
              month: '2-digit',
              year: 'numeric',
            })
          : t(translations.present)
      } | ${t(translations.duration, { years, months })}`}
    </Typography>
  );
};
