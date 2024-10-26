import { FlagDE } from 'app/flags/FlagDE';
import { FlagGB } from 'app/flags/FlagGB';
import { FlagSE } from 'app/flags/FlagSE';
import React from 'react';
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
