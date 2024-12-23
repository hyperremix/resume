'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { translations } from '@/i18n';
import { Skill } from '@/skill/Skill';
import { skillConfig } from '@/skill/skillConfig';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

type Props = {
  skill: Skill;
  months: number;
  maxMonths: number;
};

export const SkillGauge = ({ skill, months, maxMonths }: Props) => {
  const t = useTranslations();

  const degree = useMemo(() => Math.floor((months / maxMonths) * 75), [months, maxMonths]);
  const tooltipContent = useMemo(() => {
    const years = Math.floor(months / 12);
    return years === 0
      ? t(translations.skillGaugeMonthsTooltip, { months })
      : t(translations.skillGaugeYearsTooltip, { years });
  }, [months, t]);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger
          className="relative size-40 group"
          aria-label={t(translations.skillGaugeLabel, { skill: skillConfig[skill].label, months })}
        >
          <svg
            className="rotate-[135deg] size-full"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-zinc-300 dark:text-zinc-800"
              strokeWidth="2"
              strokeDasharray="75 100"
              strokeLinecap="round"
            />
            <motion.circle
              initial={{ strokeDasharray: '0 100' }}
              whileInView={{ strokeDasharray: `${degree} 100` }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              viewport={{ once: true }}
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-pink-500 group-hover:text-pink-700/80"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 text-center">
            <span className="text-4xl font-bold">{skillConfig[skill].icon}</span>
            {skillConfig[skill].label && <p>{skillConfig[skill].label}</p>}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
