import { HTMLAttributes } from 'react';

const Auth0 = (props: HTMLAttributes<SVGElement>) => (
  <svg
    style={{ marginTop: '2px', marginBottom: '-2px' }}
    {...props}
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.03 0H5.633L2.42 9.988h10.398L16.03 0zm13.61 9.988l-8.41 6.111 3.212 9.888c5.415-3.934 7.184-9.888 5.199-15.999zM16.03 32l-8.41-6.013C2.206 22.053.434 16.1 2.419 9.988l8.412 6.111-3.212 9.888 8.411-6.111 8.412 6.111L16.03 32zM26.428 0l3.213 9.988H19.244L16.03 0h10.398z" />
  </svg>
);

export default Auth0;
