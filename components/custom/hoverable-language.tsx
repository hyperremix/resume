import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TLanguage } from '@/language/TLanguage';
import { useTranslations } from 'next-intl';

type Props = {
  language: TLanguage;
};

export const HoverableLanguage = ({ language: { icon, name, level } }: Props) => {
  const t = useTranslations();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger className="text-2xl" aria-label={t(name)}>
          {icon}
        </TooltipTrigger>
        <TooltipContent>
          <p>{t(name) + ' - ' + t(level)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
