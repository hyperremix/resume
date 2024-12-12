export const TableCell = ({
  className = '',
  ...props
}: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>) => (
  <td className={`w-auto overflow-hidden break-words ${className}`} {...props} />
);
