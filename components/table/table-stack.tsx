import * as React from 'react';
import { Children } from 'react';
import { Table } from './table';
import { TableRow } from './table-row';

type TGap = 0 | 0.5 | 1 | 2;

const gapToTopPadding: Record<TGap, string> = {
  0: '',
  0.5: 'pt-0.5',
  1: 'pt-1',
  2: 'pt-2',
};

const gapToLeftPadding: Record<TGap, string> = {
  0: '',
  0.5: 'pl-0.5',
  1: 'pl-1',
  2: 'pl-2',
};

type Props = {
  direction?: 'row' | 'column';
  alignItems?: 'start' | 'center' | 'end';
  gap?: TGap;
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
    const childClassName = `${direction === 'row' || isFirstChild ? '' : gapToTopPadding[gap]} ${direction === 'column' || isFirstChild ? '' : gapToLeftPadding[gap]}`;

    return React.isValidElement(child)
      ? React.cloneElement(child, {
          // @ts-expect-error direction does exist on child
          direction,
          alignItems,
          // @ts-expect-error we know that props at least contains className
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
