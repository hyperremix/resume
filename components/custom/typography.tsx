import { ElementType, ReactNode } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-small' | 'small';

type Props = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  component?: ElementType;
};

const tags: Record<Variant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  'body-small': 'p',
  small: 'span',
};

const sizes: Record<Variant, string> = {
  h1: 'text-2xl font-bold sm:text-3xl',
  h2: 'text-xl font-bold sm:text-2xl',
  h3: 'text-lg font-bold sm:text-xl',
  h4: 'text-base font-bold sm:text-lg',
  body: 'text-sm sm:text-base',
  'body-small': 'text-xs sm:text-sm',
  small: 'text-xs sm:text-xs',
};

export const Typography = ({ variant = 'body', children, className = '', component }: Props) => {
  const Tag = component || tags[variant];

  return <Tag className={`${sizes[variant]} ${className}`}>{children}</Tag>;
};
