import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TLanguage } from '@/language/TLanguage';

type Props = {
  language: TLanguage;
};

export const HoverableLanguage = ({ language: { icon, name, level } }: Props) => (
  <TooltipProvider>
    <Tooltip delayDuration={0}>
      <TooltipTrigger className="text-2xl" aria-label={name}>
        {icon}
      </TooltipTrigger>
      <TooltipContent>
        <p>{name + ' - ' + level}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
