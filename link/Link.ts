import { ReactNode } from 'react';

export type Link = {
  label: string;
  icon: ReactNode;
  href?: string;
  ariaLabel: string;
};
