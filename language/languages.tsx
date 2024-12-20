import FlagDE from '@/icons/flags/flag-de';
import FlagGB from '@/icons/flags/flag-gb';
import FlagSE from '@/icons/flags/flag-se';
import { Language } from './Language';
import { TLanguage } from './TLanguage';

export const languages: Record<Language, TLanguage> = {
  [Language.Swedish]: {
    icon: <FlagSE />,
    name: Language.Swedish,
    level: 'Native Proficiency',
  },
  [Language.English]: {
    icon: <FlagGB />,
    name: Language.English,
    level: 'Full Professional Proficiency',
  },
  [Language.German]: {
    icon: <FlagDE />,
    name: Language.German,
    level: 'Bilingual Proficiency',
  },
};
