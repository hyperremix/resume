import { SxProps } from '@mui/material';
import * as React from 'react';
import { Children, ReactNode } from 'react';
import { Table } from './Table';
import { TableRow } from './TableRow';

type Props = {
  direction?: 'row' | 'column';
  alignItems?: 'start' | 'center' | 'end';
  gap?: number;
  sx?: SxProps;
  children?: ReactNode;
};

export const TableStack = ({
  direction = 'column',
  alignItems = 'start',
  gap = 0,
  sx,
  children,
}: Props) => {
  const childrenWithProps = Children.map(children, (child, index) => {
    const isFirstChild = index === 0;
    const childSx: SxProps = {
      pt: direction === 'row' || isFirstChild ? 0 : gap,
      pl: direction === 'column' || isFirstChild ? 0 : gap,
    };

    return React.isValidElement(child)
      ? // @ts-ignore
        React.cloneElement(child, { direction, alignItems, sx: { ...childSx, ...child.props.sx } })
      : child;
  });

  return (
    <Table sx={sx}>
      <tbody>
        {direction === 'row' ? <TableRow>{childrenWithProps}</TableRow> : childrenWithProps}
      </tbody>
    </Table>
  );
};
