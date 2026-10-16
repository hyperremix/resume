import * as React from 'react';

import { cn } from '@/lib/utils';

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-[3px] border border-rule px-2 py-0.5 font-sans text-sm text-ink',
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
