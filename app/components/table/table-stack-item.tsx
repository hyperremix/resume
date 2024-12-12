import { ReactNode } from 'react';
import { TableCell } from './table-cell';
import { TableRow } from './table-row';

type Props = {
  direction?: 'row' | 'column';
  alignItems?: 'start' | 'center' | 'end';
  className?: string;
  children?: ReactNode;
};

export const TableStackItem = ({
  direction = 'column',
  alignItems = 'start',
  className = '',
  children,
}: Props) =>
  direction === 'column' ? (
    <TableRow>
      <TableCell className={`text-${alignItemsToTextAlign[alignItems]} ${className}`}>
        {children}
      </TableCell>
    </TableRow>
  ) : (
    <TableCell className={`align-${alignItemsToVerticalAlign[alignItems]} ${className}`}>
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
