import { ArrowBack } from '@mui/icons-material';
import { Button, Container, Stack, Typography } from '@mui/material';
import { ExperienceChip } from 'app/components/ExperienceChip';
import { TimePeriod } from 'app/components/TimePeriod';
import { experiencesState } from 'experiences';
import { TExperience } from 'experiences/TExperience';
import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export const ExperiencePage = () => {
  const { experienceSlug } = useParams();
  const { pathname } = useLocation();

  const experience = useMemo(
    () =>
      experiencesState.experiences
        .map((experience) => [experience, ...(experience.subExperiences ?? [])])
        .flat()
        .find(({ slug }) => slug === experienceSlug),
    [experienceSlug, experiencesState.experiences],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container maxWidth="md">
      {experience ? <Experience experience={experience} /> : <ExperienceNotFoundDisplay />}
    </Container>
  );
};

type Props = {
  experience: TExperience;
};

export const Experience = ({
  experience: { title, from, to, icon, role, location, subExperiences, ...description },
}: Props) => (
  <>
    <Button component={Link} startIcon={<ArrowBack />} to="/">
      Timeline
    </Button>
    <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 2 }}>
      {icon && React.cloneElement(icon as any, { fontSize: 'large' })}
      <Typography variant="h3">{title}</Typography>
    </Stack>
    {role && <Typography>{role}</Typography>}
    {location && <Typography>{location}</Typography>}
    <TimePeriod from={from} to={to} />
    {(description.companyDescription ||
      description.projectDescription ||
      description.roleDescription ||
      description.skills) && <ExperienceDescription {...description} />}
  </>
);

export const ExperienceNotFoundDisplay = () => (
  <Typography>Ooops this experience does not exist.</Typography>
);

const ExperienceDescription = ({
  companyDescription,
  projectDescription,
  roleDescription,
  skills,
}: Pick<
  TExperience,
  'companyDescription' | 'projectDescription' | 'roleDescription' | 'skills'
>) => (
  <Stack pt={1} gap={1}>
    <Typography>{companyDescription}</Typography>
    {projectDescription && (
      <Stack>
        <Typography variant="h6">Project</Typography>
        <Typography>{projectDescription}</Typography>
      </Stack>
    )}
    {roleDescription && (
      <Stack>
        <Typography variant="h6">Role</Typography>
        {roleDescription.map((section, index) => (
          <Typography key={index}>{section}</Typography>
        ))}
      </Stack>
    )}
    {skills && (
      <Stack>
        <Typography variant="h6">Skills</Typography>
        <Stack direction="row" gap={1} flexWrap="wrap">
          {skills.map((skill) => (
            <ExperienceChip key={skill} skill={skill} />
          ))}
        </Stack>
      </Stack>
    )}
  </Stack>
);
