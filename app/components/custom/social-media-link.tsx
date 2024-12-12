import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

type Props = {
  label: string;
  icon: ReactNode;
  href?: string;
  withoutLabel?: boolean;
};

export const SocialMediaLink = ({ href, icon, label, withoutLabel }: Props) => (
  <TooltipProvider>
    <Tooltip delayDuration={0}>
      <TooltipTrigger className="text-2xl">
        {href ? (
          <a href={href} color="inherit" target="_blank">
            {icon}
            {!withoutLabel && <p>{label}</p>}
          </a>
        ) : (
          <>
            {icon}
            {!withoutLabel && <p>{label}</p>}
          </>
        )}
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
