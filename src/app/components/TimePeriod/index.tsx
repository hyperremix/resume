import { Typography, TypographyProps } from '@mui/material';
import { getDateInFormat, getRelativeTime } from 'i18n/datetime';
import * as React from 'react';

type Props = {
  from: Date;
  to?: Date;
} & TypographyProps;

export const TimePeriod = ({ from, to, ...typographyProps }: Props) => (
  <Typography variant="caption" color="secondary" {...typographyProps}>
    {`${getDateInFormat(from, 'MM/YYYY')} - ${getDateInFormat(to, 'MM/YYYY')} | ${getRelativeTime(
      from,
      to,
    )}`}
  </Typography>
);
