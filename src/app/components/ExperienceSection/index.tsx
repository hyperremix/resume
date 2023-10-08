import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListSubheader,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
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
  withStickyHeader?: boolean;
  children?: ReactNode;
};

export const ExperienceSection = (props: Props) => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
  return isSmallScreen ? <SmallLayout {...props} /> : <LargeLayout {...props} />;
};

export const SmallLayout = ({
  icon,
  title,
  titleVariant = 'h5',
  role,
  location,
  timePeriod,
  companyDescription,
  projectDescription,
  roleDescription,
  skills,
  withStickyHeader = false,
  children,
}: Props) => (
  <Stack>
    {withStickyHeader ? (
      <ListSubheader sx={{ pl: 0, color: 'inherit' }}>
        <Stack direction="row" alignItems="center" gap={1}>
          {icon ? icon : <CircleOutlinedIcon />}
          <Typography variant={titleVariant}>{title}</Typography>
        </Stack>
        {role && <Typography sx={{ mb: -2 }}>{role}</Typography>}
        {location && <Typography>{location}</Typography>}
        <Typography variant="caption" color="secondary">
          {timePeriod}
        </Typography>
        <Divider />
      </ListSubheader>
    ) : (
      <>
        <Stack direction="row" alignItems="center" gap={1}>
          {icon ? icon : <CircleOutlinedIcon />}
          <Typography variant={titleVariant}>{title}</Typography>
        </Stack>
        {role && <Typography>{role}</Typography>}
        {location && <Typography>{location}</Typography>}
        <Typography variant="caption" color="secondary">
          {timePeriod}
        </Typography>
      </>
    )}
    <Stack>
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
    {children && (
      <List>
        {Children.map(children, (child, index) => (
          <ListItem key={index} sx={{ pl: 0 }}>
            {child}
          </ListItem>
        ))}
      </List>
    )}
  </Stack>
);

export const LargeLayout = ({
  icon,
  title,
  titleVariant = 'h5',
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
    <Stack direction="row" alignItems="center" gap={2}>
      {icon ? icon : <CircleOutlinedIcon />}
      <Typography variant={titleVariant}>{title}</Typography>
    </Stack>
    {role && <Typography>{role}</Typography>}
    {location && <Typography>{location}</Typography>}
    <Typography variant="caption" color="secondary">
      {timePeriod}
    </Typography>
    <Stack>
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
    {children && (
      <Stack pl={4} gap={2} py={2} sx={{}}>
        {Children.map(children, (child) => (
          <TimelineWrapper>
            {Children.count(children) > 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  left: -29,
                  top: 12,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  borderStyle: 'solid',
                  borderWidth: 2,
                  borderColor: 'white',
                }}
              />
            )}
            {child}
          </TimelineWrapper>
        ))}
      </Stack>
    )}
  </Stack>
);
