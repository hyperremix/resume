import { HTMLAttributes } from 'react';

const Kibana = (props: HTMLAttributes<SVGElement>) => (
  <svg
    style={{ marginTop: '3px', marginBottom: '-3px' }}
    {...props}
    viewBox="0 0 30 30"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.04 23.99H4.18l9.88-11.86c4.23 2.76 6.98 7.04 6.98 11.86zm0-23.95H3.08v21.55z" />
  </svg>
);

export default Kibana;
