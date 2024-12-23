import { translations } from '@/i18n';
import FlagDE from '@/icons/flags/flag-de';
import FlagGB from '@/icons/flags/flag-gb';
import FlagSE from '@/icons/flags/flag-se';
import { Language } from './Language';
import { TLanguage } from './TLanguage';

export const languages: Record<Language, TLanguage> = {
  [Language.Swedish]: {
    icon: <FlagSE />,
    name: translations.language[Language.Swedish].name,
    level: translations.language[Language.Swedish].level,
  },
  [Language.English]: {
    icon: <FlagGB />,
    name: translations.language[Language.English].name,
    level: translations.language[Language.English].level,
  },
  [Language.German]: {
    icon: <FlagDE />,
    name: translations.language[Language.German].name,
    level: translations.language[Language.German].level,
  },
};
