import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  Box,
  ButtonBase,
  Fade,
  Stack,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useIsOnScreen } from 'app/hooks/useIsOnScreen';
import { TExperience } from 'experiences/TExperience';
import { LundUniversityExperience } from 'experiences/experiences/LundUniversityExperience';
import { skillIcon } from 'experiences/skillIcon';
import * as React from 'react';
import { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HighlightedSkill } from '../HighlightedSkill';
import { TimePeriod } from '../TimePeriod';

type Props = {
  experiences: TExperience[];
};

export const Timeline = ({ experiences }: Props) => {
  const flatExperiences = useMemo(
    () =>
      [...experiences, LundUniversityExperience]
        .map((experience) => [experience, ...(experience.subExperiences ?? [])])
        .flat(),
    [experiences],
  );
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));

  return (
    <Stack gap={isSmallScreen ? 2 : 0}>
      {flatExperiences.map((experience, index) => (
        <FadedExperience key={index} experience={experience} isOnRight={index % 2 === 0} />
      ))}
    </Stack>
  );
};

const FadedExperience = ({
  experience,
  isOnRight,
}: {
  experience: TExperience;
  isOnRight: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));

  const isOnScreen = useIsOnScreen(ref);

  return (
    <Stack ref={ref}>
      <Fade in={isOnScreen} {...(isOnScreen ? { timeout: 2000 } : {})}>
        <Stack direction="row" gap={6}>
          {isOnRight && !isSmallScreen && <Stack width="50%" />}
          <Experience experience={experience} isOnRight={isOnRight} />
          {!isOnRight && !isSmallScreen && <Stack width="50%" />}
        </Stack>
      </Fade>
    </Stack>
  );
};

const Experience = ({ experience, isOnRight }: { experience: TExperience; isOnRight: boolean }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));

  const iconStyle: SxProps | undefined = useMemo(() => {
    if (isSmallScreen) {
      return undefined;
    }

    const position = isOnRight ? 'left' : 'right';

    return {
      position: 'absolute',
      [position]: -36,
      top: 6,
    };
  }, [isOnRight, isSmallScreen]);

  const timelineStyle: SxProps = useMemo(() => {
    const position = isOnRight || isSmallScreen ? 'left' : 'right';
    const pixelAmount = isSmallScreen ? -26 : -33;

    return {
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        background: theme.palette.text.primary,
        height: 'calc(100% - 2px)',
        width: 2,
        [position]: pixelAmount,
        top: 2,
      },
      ml: isSmallScreen ? 4.5 : 0,
    };
  }, [isOnRight, isSmallScreen]);

  const align = useMemo(
    () => (isOnRight || isSmallScreen ? 'start' : 'end'),
    [isOnRight, isSmallScreen],
  );

  return (
    <Stack
      width={isSmallScreen ? '100%' : '50%'}
      alignItems={align}
      sx={{
        borderRadius: '4px',
        transition: 'background-color 0.3s',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      }}
    >
      <ButtonBase component={Link} to={`experiences/${experience.slug}`}>
        <Stack alignItems={align} position="relative" px={1}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flex={1}
            gap={1}
          >
            <Stack
              direction={isSmallScreen ? 'row' : 'column'}
              gap={isSmallScreen ? 1 : 0}
              alignItems={isSmallScreen ? 'center' : 'flex-start'}
            >
              <Box sx={iconStyle}>{experience.icon}</Box>
              <Typography variant="h4">{experience.title}</Typography>
            </Stack>
            {isSmallScreen && <OpenInNewIcon fontSize="small" />}
          </Stack>

          <Stack sx={timelineStyle}>
            <Typography variant="subtitle2" textAlign={align}>
              {experience.role}
            </Typography>
            <TimePeriod from={experience.from} to={experience.to} textAlign={align} />
            {experience.projectDescription && (
              <Typography pt={1} textAlign={align}>
                {experience.projectDescription}
              </Typography>
            )}
            {experience.highlightedSkills && (
              <Stack pt={1} pb={1} direction="row" gap={1} justifyContent={align} flexWrap="wrap">
                {experience.highlightedSkills.map((skill) => (
                  <HighlightedSkill key={skill} icon={skillIcon[skill]} label={skill} />
                ))}
              </Stack>
            )}
          </Stack>
        </Stack>
      </ButtonBase>
    </Stack>
  );
};
