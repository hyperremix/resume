import { TimePeriod } from '@/components/custom/time-period';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/experience';
import { TExperience } from '@/experience/TExperience';
import ArrowLeft from '@/icons/common/arrow-left.svg?react';
import { skillIcon } from '@/skill/skillIcon';
import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router';

const Experience = () => {
  const { experienceSlug } = useParams();

  const experience = useMemo(
    () =>
      experiences
        .map((experience) => [experience, ...(experience.subExperiences ?? [])])
        .flat()
        .find(({ slug }) => slug === experienceSlug),
    [experienceSlug],
  );

  return (
    <div className="max-w-4xl mx-auto pt-2 text-zinc-800 dark:text-zinc-300 fill-zinc-800 dark:fill-zinc-300">
      {experience ? <ExperienceContent experience={experience} /> : <ExperienceNotFoundDisplay />}
    </div>
  );
};

type Props = {
  experience: TExperience;
};

const ExperienceContent = ({
  experience: { title, from, to, icon, roles, location, ...description },
}: Props) => (
  <>
    <Link to="/" className="flex flex-row items-center gap-1 mb-2">
      <ArrowLeft className="text-3xl" />
      <p>Home</p>
    </Link>
    <div className="flex flex-row items-center gap-2 mb-2 text-4xl">
      {icon}
      <p>{title}</p>
    </div>
    {roles && <p>{roles.map((role) => role.title).join(' | ')}</p>}
    {location && <p>{location}</p>}
    <TimePeriod from={from} to={to} />
    {(description.companyDescription || description.projectDescription || description.skills) && (
      <ExperienceDescription roles={roles} {...description} />
    )}
  </>
);

const ExperienceNotFoundDisplay = () => <p>Ooops this experience does not exist.</p>;

const ExperienceDescription = ({
  companyDescription,
  projectDescription,
  skills,
  roles,
}: Pick<TExperience, 'companyDescription' | 'projectDescription' | 'skills' | 'roles'>) => (
  <div className="flex flex-col gap-1 pt-1">
    <p>{companyDescription}</p>
    {projectDescription && (
      <>
        <p className="text-2xl">Project</p>
        <p>{projectDescription}</p>
      </>
    )}
    {roles && (
      <>
        <p className="text-2xl">Roles</p>
        {roles.map((role) => (
          <div key={role.title}>
            <p className="text-lg font-bold">{role.title}</p>
            {role.description?.map((description) => <p>{description}</p>)}
          </div>
        ))}
      </>
    )}
    {skills && (
      <>
        <p className="text-2xl">Skills</p>
        <div className="flex flex-row flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill}>
              {React.cloneElement(skillIcon[skill] ?? <></>, { className: 'text-2xl' })}
              <p>{skill}</p>
            </Badge>
          ))}
        </div>
      </>
    )}
  </div>
);

export default Experience;
