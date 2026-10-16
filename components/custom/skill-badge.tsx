import { Badge } from '@/components/ui/badge';
import { Skill } from '@/skill/Skill';
import { skillConfig } from '@/skill/skillConfig';

export const SkillBadge = ({ skill }: { skill: Skill }) => {
  const { icon } = skillConfig[skill];

  return (
    <Badge>
      {icon && (
        <span aria-hidden className="flex text-[1.1em]">
          {icon}
        </span>
      )}
      {skill}
    </Badge>
  );
};
