import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Skill } from '@/skill/Skill';
import { skillConfig } from '@/skill/skillConfig';

type Props = {
  skill: Skill;
};

export const HighlightedSkill = ({ skill }: Props) => {
  const { label, icon } = skillConfig[skill];

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger aria-label={label ?? skill}>
          <div className="p-1.5 inline-flex items-center rounded-full font-semibold transition-colors bg-zinc-950 fill-zinc-200 text-zinc-200 shadow hover:bg-zinc-700/80 dark:bg-zinc-200 dark:fill-zinc-950 dark:text-zinc-950 dark:hover:bg-zinc-400/80">
            {icon ? (
              <div className="text-3xl">{icon}</div>
            ) : (
              <span className="p-1">{label ?? skill}</span>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label ?? skill}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
