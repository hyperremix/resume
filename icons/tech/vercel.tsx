import { HTMLAttributes } from 'react';

const Vercel = (props: HTMLAttributes<SVGElement>) => (
  <svg
    style={{ marginTop: '-2px', marginBottom: '2px' }}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M1,21H23L12,2" />
  </svg>
);

export default Vercel;
