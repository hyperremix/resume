import { Typography } from '@mui/material';
import { getDateInFormat, getRelativeTime } from 'i18n/datetime';
import * as React from 'react';

export const TimePeriod = ({ from, to }: { from: Date; to?: Date }) => (
  <Typography variant="caption" color="secondary">
    {`${getDateInFormat(from, 'MM/YYYY')} - ${getDateInFormat(to, 'MM/YYYY')} | ${getRelativeTime(
      from,
      to,
    )}`}
  </Typography>
);
