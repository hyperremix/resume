export const Table = ({
  className = '',
  ...props
}: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>) => (
  <table className={`w-100 ${className}`} style={{ maxWidth: '727px' }} {...props} />
);
