import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getSortedSkills } from '@/experience';
import { translations } from '@/i18n';
import { Skill } from '@/skill/Skill';
import { SkillCategory } from '@/skill/SkillCategory';
import { skillConfig } from '@/skill/skillConfig';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { SkillGauge } from './skill-gauge';
import { Typography } from './typography';

export const SkillLevels = () => {
  const t = useTranslations();

  const [groupedSortedSkills, maxMonths] = useMemo(() => {
    const skills = getSortedSkills();

    const groupedSkills = skills.reduce(
      (acc, skill) => {
        const category = skillConfig[skill.skill].category;
        return { ...acc, [category]: [...(acc[category] ?? []), skill] };
      },
      {} as Record<SkillCategory, { skill: Skill; months: number }[]>,
    );

    return [groupedSkills, skills[0]?.months ?? 0];
  }, []);

  return (
    <div className="flex flex-col">
      <Typography variant="h1">{t(translations.skillsHeader)}</Typography>
      <Accordion type="single" collapsible>
        {Object.entries(groupedSortedSkills).map(([category, sortedSkills]) => (
          <AccordionItem key={category} value={category} className="flex flex-col gap-4">
            <AccordionTrigger className="text-lg">
              {t(translations.skillCategory[category as keyof typeof SkillCategory])}
            </AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center flex-wrap gap-4">
              {sortedSkills.map(({ skill, months }) => (
                <SkillGauge key={skill} skill={skill} months={months} maxMonths={maxMonths} />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
