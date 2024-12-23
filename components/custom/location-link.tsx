import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { translations } from '@/i18n';
import MapMarker from '@/icons/common/map-marker';
import { useTranslations } from 'next-intl';

export const LocationLink = () => {
  const t = useTranslations();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger className="text-2xl" aria-label={t(translations.locationLabel)}>
          <MapMarker />
        </TooltipTrigger>
        <TooltipContent>
          <p>{t(translations.locationLabel)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
