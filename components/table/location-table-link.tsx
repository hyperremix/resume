import { translations } from '@/i18n';
import MapMarker from '@/icons/common/map-marker';
import { useTranslations } from 'next-intl';
import { TableStack } from './table-stack';
import { TableStackItem } from './table-stack-item';

export const LocationTableLink = () => {
  const t = useTranslations();

  return (
    <TableStack direction="row" alignItems="center" className="w-px whitespace-nowrap">
      <TableStackItem className="fill-zinc-800 dark:fill-zinc-300">
        <MapMarker />
      </TableStackItem>
      <TableStackItem>
        <p className="text-xs">{t(translations.locationLabel)}</p>
      </TableStackItem>
    </TableStack>
  );
};
