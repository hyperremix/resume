import * as React from 'react';
import { Children } from 'react';
import { Table } from './table';
import { TableRow } from './table-row';

type Props = {
  direction?: 'row' | 'column';
  alignItems?: 'start' | 'center' | 'end';
  gap?: number;
} & React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;

export const TableStack = ({
  direction = 'column',
  alignItems = 'start',
  gap = 0,
  children,
  ...props
}: Props) => {
  const childrenWithProps = Children.map(children, (child, index) => {
    const isFirstChild = index === 0;
    const childClassName = `${direction === 'row' || isFirstChild ? '' : `pt-${gap}`} ${direction === 'column' || isFirstChild ? '' : `pl-${gap}`}`;

    return React.isValidElement(child)
      ? React.cloneElement(child, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          direction,
          alignItems,
          className: `${childClassName} ${child.props.className}`,
        })
      : child;
  });

  return (
    <Table {...props}>
      <tbody>
        {direction === 'row' ? <TableRow>{childrenWithProps}</TableRow> : childrenWithProps}
      </tbody>
    </Table>
  );
};
