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
  useTheme,
} from '@mui/material';
import { TExperience } from 'experiences/TExperience';
import { skillIcon } from 'experiences/skillIcon';
import * as React from 'react';
import { TimePeriod } from '../TimePeriod';
import { TimelineWrapper } from '../TimelineWrapper';

type Props = {
  experience: TExperience;
};

export const ExperienceSection = (props: Props) => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
  return isSmallScreen ? <SmallLayout {...props} /> : <LargeLayout {...props} />;
};

export const SmallLayout = ({
  experience: { title, from, to, icon, role, location, subExperiences, ...description },
}: Props) => (
  <Stack>
    {!!subExperiences ? (
      <ListSubheader sx={{ pl: 0, color: 'inherit' }}>
        <Stack direction="row" alignItems="center" gap={1}>
          {icon ? icon : <CircleOutlinedIcon />}
          <Typography variant="h6">{title}</Typography>
        </Stack>
        {role && <Typography sx={{ mb: -2 }}>{role}</Typography>}
        {location && <Typography>{location}</Typography>}
        <TimePeriod from={from} to={to} />
        <Divider />
      </ListSubheader>
    ) : (
      <>
        <Stack direction="row" alignItems="center" gap={1}>
          {icon ? icon : <CircleOutlinedIcon />}
          <Typography variant="h6">{title}</Typography>
        </Stack>
        {role && <Typography>{role}</Typography>}
        {location && <Typography>{location}</Typography>}
        <TimePeriod from={from} to={to} />
      </>
    )}
    {(description.companyDescription ||
      description.projectDescription ||
      description.roleDescription ||
      description.skills) && <ExperienceDescription {...description} />}
    {subExperiences && (
      <List>
        {subExperiences.map((subExperience) => (
          <ListItem key={subExperience.title} sx={{ pl: 0 }}>
            <ExperienceSection experience={subExperience} />
          </ListItem>
        ))}
      </List>
    )}
  </Stack>
);

export const LargeLayout = ({
  experience: { title, from, to, icon, role, location, subExperiences, ...description },
}: Props) => {
  const theme = useTheme();

  return (
    <Stack>
      <Stack direction="row" alignItems="center" gap={2}>
        {icon ? icon : <CircleOutlinedIcon />}
        <Typography variant="h6">{title}</Typography>
      </Stack>
      {role && <Typography>{role}</Typography>}
      {location && <Typography>{location}</Typography>}
      <TimePeriod from={from} to={to} />
      {(description.companyDescription ||
        description.projectDescription ||
        description.roleDescription ||
        description.skills) && <ExperienceDescription {...description} />}
      {subExperiences && (
        <Stack pl={4} gap={2} py={2} sx={{}}>
          {subExperiences.map((experience) => (
            <TimelineWrapper key={experience.title}>
              {subExperiences.length > 1 && (
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
                    borderColor: theme.palette.text.primary,
                  }}
                />
              )}
              <ExperienceSection experience={experience} />
            </TimelineWrapper>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

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
          {skills.map((skill) => skillIcon[skill]())}
        </Stack>
      </Stack>
    )}
  </Stack>
);
