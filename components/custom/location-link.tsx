import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { translations } from '@/i18n';
import MapMarker from '@/icons/common/map-marker';
import { useTranslations } from 'next-intl';
import { Typography } from './typography';

export const LocationLink = () => {
  const t = useTranslations();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger className="text-2xl" aria-label={t(translations.locationLabel)}>
          <MapMarker />
        </TooltipTrigger>
        <TooltipContent>
          <Typography>{t(translations.locationLabel)}</Typography>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
