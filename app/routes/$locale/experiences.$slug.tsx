import { TimePeriod } from '@/components/custom/time-period';
import { Typography } from '@/components/custom/typography';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/experience';
import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import ArrowLeft from '@/icons/common/arrow-left';
import { skillConfig } from '@/skill/skillConfig';
import { createFileRoute, Link } from '@tanstack/react-router';
import React from 'react';
import { useLocale, useTranslations } from 'use-intl';

export const Route = createFileRoute('/$locale/experiences/$slug')({
  component: Experience,
});

function Experience() {
  const { slug: experienceSlug } = Route.useParams();
  const experience = experiences
    .map((experience) => [experience, ...(experience.subExperiences ?? [])])
    .flat()
    .find(({ slug }) => slug === experienceSlug);

  return (
    <div className="max-w-4xl mx-auto py-2 text-zinc-800 dark:text-zinc-300 fill-zinc-800 dark:fill-zinc-300">
      {experience ? <ExperienceContent experience={experience} /> : <ExperienceNotFoundDisplay />}
    </div>
  );
}

type Props = {
  experience: TExperience;
};

const ExperienceContent = ({
  experience: { title, from, to, icon, roles, location, ...description },
}: Props) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <Link to="/$locale" params={{ locale }} className="flex flex-row items-center gap-1 mb-2">
        <ArrowLeft className="text-3xl fill-zinc-800 dark:fill-zinc-300" />
        <Typography>{t(translations.experience.homeLinkLabel)}</Typography>
      </Link>
      <Typography variant="h1" className="flex flex-row items-center gap-2 mb-2">
        {icon}
        {t(title)}
      </Typography>
      {roles && <Typography>{roles.map((role) => t(role.title)).join(' | ')}</Typography>}
      {location && <Typography>{location}</Typography>}
      <TimePeriod from={from} to={to} />
      {(description.companyDescription || description.projectDescription || description.skills) && (
        <ExperienceDescription roles={roles} {...description} />
      )}
    </>
  );
};

const ExperienceNotFoundDisplay = () => (
  <Typography>Ooops this experience does not exist.</Typography>
);

const ExperienceDescription = ({
  companyDescription,
  projectDescription,
  skills,
  roles,
}: Pick<TExperience, 'companyDescription' | 'projectDescription' | 'skills' | 'roles'>) => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-1 pt-1">
      {companyDescription && <Typography>{t(companyDescription)}</Typography>}
      {projectDescription && (
        <>
          <Typography variant="h2">{t(translations.projectHeader)}</Typography>
          <Typography>{t(projectDescription)}</Typography>
        </>
      )}
      {roles && (
        <>
          <Typography variant="h2">{t(translations.rolesHeader)}</Typography>
          {roles.map((role, i) => (
            <div key={i}>
              <Typography variant="h3">{t(role.title)}</Typography>
              {role.description?.map((description, i) => (
                <Typography key={i}>{t(description)}</Typography>
              ))}
            </div>
          ))}
        </>
      )}
      {skills && (
        <>
          <Typography variant="h2">{t(translations.skillsHeader)}</Typography>
          <div className="flex flex-row flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill}>
                {React.cloneElement(skillConfig[skill].icon ?? <></>, { className: 'text-2xl' })}
                {skillConfig[skill].label && (
                  <Typography variant="small">{skillConfig[skill].label}</Typography>
                )}
              </Badge>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
