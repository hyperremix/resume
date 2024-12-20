'use client';

import { getDateInFormat, getRelativeTime } from '@/utils/dayjs';

type Props = {
  from: Date;
  to?: Date;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export const TimePeriod = ({ from, to, className, ...props }: Props) => (
  <p className={`text-pink-500 ${className}`} {...props}>
    {`${getDateInFormat(from, 'MM/YYYY')} - ${getDateInFormat(to, 'MM/YYYY')} | ${getRelativeTime(
      from,
      to,
    )}`}
  </p>
);
