import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

type Props = {
  icon?: ReactNode;
  label: string;
  href?: string;
};

export const HighlightedSkill = ({ icon, label, href }: Props) => {
  const content = icon ? (
    <div className="text-3xl">{icon}</div>
  ) : (
    <span className="p-1">{label}</span>
  );

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <div className="p-1.5 inline-flex items-center rounded-full font-semibold transition-colors bg-zinc-400 fill-zinc-800 text-zinc-800 shadow hover:bg-zinc-700/80 dark:bg-zinc-500 dark:fill-zinc-950 dark:text-zinc-950 dark:hover:bg-zinc-200/80">
            {href ? (
              <a href={href} color="inherit" target="_blank">
                {content}
              </a>
            ) : (
              content
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
