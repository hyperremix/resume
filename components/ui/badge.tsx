import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-3 py-1.5 font-semibold border',
  {
    variants: {
      variant: {
        default:
          'border-transparent dark:border-transparent bg-zinc-950 text-zinc-200 fill-zinc-200 dark:bg-zinc-200 dark:text-zinc-950 dark:fill-zinc-950',
        outline: 'text-zinc-800 dark:text-zinc-300 fill-zinc-800 dark:fill-zinc-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
