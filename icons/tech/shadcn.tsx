import { HTMLAttributes } from 'react';

const Shadcn = (props: HTMLAttributes<SVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <line
      x1="208"
      y1="128"
      x2="128"
      y2="208"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    ></line>
    <line
      x1="192"
      y1="40"
      x2="40"
      y2="192"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    ></line>
  </svg>
);

export default Shadcn;
