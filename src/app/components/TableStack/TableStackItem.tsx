import { SxProps } from '@mui/material';
import React, { ReactNode } from 'react';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

type Props = {
  direction?: 'row' | 'column';
  alignItems?: 'start' | 'center' | 'end';
  sx?: SxProps;
  children?: ReactNode;
};

export const TableStackItem = ({
  direction = 'column',
  alignItems = 'start',
  sx,
  children,
}: Props) =>
  direction === 'column' ? (
    <TableRow>
      <TableCell sx={{ textAlign: alignItemsToTextAlign[alignItems], ...sx }}>{children}</TableCell>
    </TableRow>
  ) : (
    <TableCell sx={{ verticalAlign: alignItemsToVerticalAlign[alignItems], ...sx }}>
      {children}
    </TableCell>
  );

const alignItemsToVerticalAlign: Record<string, 'top' | 'middle' | 'bottom'> = {
  start: 'top',
  center: 'middle',
  end: 'bottom',
};

const alignItemsToTextAlign: Record<string, 'left' | 'center' | 'right'> = {
  start: 'left',
  center: 'center',
  end: 'right',
};
