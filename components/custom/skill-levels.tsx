import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getSortedSkills } from '@/experience';
import { Skill } from '@/skill/Skill';
import { SkillCategory } from '@/skill/SkillCategory';
import { skillConfig } from '@/skill/skillConfig';
import { useMemo } from 'react';
import { SkillGauge } from './skill-gauge';

export const SkillLevels = () => {
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
      <h1 className="text-2xl">Skills</h1>
      <Accordion type="single" collapsible>
        {Object.entries(groupedSortedSkills).map(([category, sortedSkills]) => (
          <AccordionItem key={category} value={category} className="flex flex-col gap-4">
            <AccordionTrigger className="text-lg">{category}</AccordionTrigger>
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
