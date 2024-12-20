import { TExperience } from '@/experience/TExperience';
import { Experience } from './experience';

type Props = {
  experiences: TExperience[];
};

export const Timeline = ({ experiences }: Props) => {
  const flatExperiences = experiences
    .map((experience) => [experience, ...(experience.subExperiences ?? [])])
    .flat();

  return (
    <div className="flex flex-col gap-2 sm:gap-0">
      {flatExperiences.map((experience, index) => (
        <Experience key={index} experience={experience} isOnRight={index % 2 === 0} />
      ))}
    </div>
  );
};
