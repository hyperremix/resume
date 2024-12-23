import { TimePeriod } from '@/components/custom/time-period';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/experience';
import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import { Link } from '@/i18n/routing';
import ArrowLeft from '@/icons/common/arrow-left';
import { skillConfig } from '@/skill/skillConfig';
import { useTranslations } from 'next-intl';
import React from 'react';

const Experience = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const experienceSlug = (await params).slug;
  const experience = experiences
    .map((experience) => [experience, ...(experience.subExperiences ?? [])])
    .flat()
    .find(({ slug }) => slug === experienceSlug);

  return (
    <div className="max-w-4xl mx-auto py-2 text-zinc-800 dark:text-zinc-300 fill-zinc-800 dark:fill-zinc-300">
      {experience ? <ExperienceContent experience={experience} /> : <ExperienceNotFoundDisplay />}
    </div>
  );
};

type Props = {
  experience: TExperience;
};

const ExperienceContent = ({
  experience: { title, from, to, icon, roles, location, ...description },
}: Props) => {
  const t = useTranslations();

  return (
    <>
      <Link href="/" className="flex flex-row items-center gap-1 mb-2">
        <ArrowLeft className="text-3xl fill-zinc-800 dark:fill-zinc-300" />
        <p>{t(translations.experience.homeLinkLabel)}</p>
      </Link>
      <div className="flex flex-row items-center gap-2 mb-2 text-4xl">
        {icon}
        <p>{t(title)}</p>
      </div>
      {roles && <p>{roles.map((role) => t(role.title)).join(' | ')}</p>}
      {location && <p>{location}</p>}
      <TimePeriod from={from} to={to} />
      {(description.companyDescription || description.projectDescription || description.skills) && (
        <ExperienceDescription roles={roles} {...description} />
      )}
    </>
  );
};

const ExperienceNotFoundDisplay = () => <p>Ooops this experience does not exist.</p>;

const ExperienceDescription = ({
  companyDescription,
  projectDescription,
  skills,
  roles,
}: Pick<TExperience, 'companyDescription' | 'projectDescription' | 'skills' | 'roles'>) => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-1 pt-1">
      <p>{t(companyDescription)}</p>
      {projectDescription && (
        <>
          <p className="text-2xl">{t(translations.projectHeader)}</p>
          <p>{t(projectDescription)}</p>
        </>
      )}
      {roles && (
        <>
          <p className="text-2xl">{t(translations.rolesHeader)}</p>
          {roles.map((role, i) => (
            <div key={i}>
              <p className="text-lg font-bold">{t(role.title)}</p>
              {role.description?.map((description, i) => <p key={i}>{t(description)}</p>)}
            </div>
          ))}
        </>
      )}
      {skills && (
        <>
          <p className="text-2xl">{t(translations.skillsHeader)}</p>
          <div className="flex flex-row flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill}>
                {React.cloneElement(skillConfig[skill].icon ?? <></>, { className: 'text-2xl' })}
                {skillConfig[skill].label && <p>{skillConfig[skill].label}</p>}
              </Badge>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Experience;
