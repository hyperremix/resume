import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Children, ReactNode } from 'react';
import { TimelineWrapper } from '../TimelineWrapper';

type Props = {
  title: string;
  titleVariant?: 'h5' | 'h6';
  icon?: ReactNode;
  role?: string;
  location?: string;
  timePeriod: string;
  companyDescription?: ReactNode;
  projectDescription?: ReactNode;
  roleDescription?: ReactNode;
  skills?: ReactNode;
  children?: ReactNode;
};

export const ExperienceSection = ({
  title,
  titleVariant = 'h5',
  icon,
  role,
  location,
  timePeriod,
  companyDescription,
  projectDescription,
  roleDescription,
  skills,
  children,
}: Props) => (
  <Stack>
    <Stack direction="row" gap={2}>
      <Stack pt={1}>{icon ? icon : <CircleOutlinedIcon />}</Stack>
      <Stack>
        <Typography variant={titleVariant}>{title}</Typography>
        {role && <Typography>{role}</Typography>}
        {location && <Typography>{location}</Typography>}
        <Typography variant="caption" color="secondary">
          {timePeriod}
        </Typography>
        {(companyDescription || projectDescription || roleDescription || skills) && (
          <Stack pt={1} gap={1}>
            {companyDescription}
            {projectDescription && (
              <Stack>
                <Typography variant="h6">Project</Typography>
                {projectDescription}
              </Stack>
            )}
            {roleDescription && (
              <Stack>
                <Typography variant="h6">Role</Typography>
                {roleDescription}
              </Stack>
            )}
            {skills && (
              <Stack>
                <Typography variant="h6">Skills</Typography>
                {skills}
              </Stack>
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
    {children && (
      <Stack pl={4} gap={2} py={2} sx={{}}>
        {Children.map(children, (child) => (
          <TimelineWrapper>{child}</TimelineWrapper>
        ))}
      </Stack>
    )}
  </Stack>
);
