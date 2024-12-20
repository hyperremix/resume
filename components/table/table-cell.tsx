export const TableCell = ({
  className = '',
  ...props
}: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>) => (
  <td className={`overflow-hidden break-words ${className}`} {...props} />
);
