import SouthIcon from '@mui/icons-material/South';
import { Container, Link, Stack, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { HighlightedSkill } from 'app/components/HighlightedSkill';
import { HoverableLanguage } from 'app/components/HoverableLanguage';
import { ProfilePicture } from 'app/components/ProfilePicture';
import { SocialMediaLinks } from 'app/components/SocialMediaLinks';
import { Timeline } from 'app/components/Timeline';
import { MongoDB } from 'app/icons/MongoDB';
import { NestJS } from 'app/icons/NestJS';
import { experiencesState } from 'experiences';
import { languages } from 'languages/languages';
import {
  Aws,
  Kubernetes,
  LanguageKotlin,
  LanguageTypescript,
  Leaf,
  MaterialUi,
  React as ReactJs,
} from 'mdi-material-ui';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Home = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));

  return (
    <>
      <Container maxWidth="md">
        <Stack sx={{ height: '100vh' }} alignItems="center" justifyContent="center">
          <Stack gap={2}>
            <Stack direction="row" alignItems="center" gap={2}>
              <ProfilePicture />
              <Stack>
                <Typography variant="h3">Fredrik Pettersson</Typography>
                <Typography
                  variant="h6"
                  style={{
                    background: `-webkit-linear-gradient(45deg, ${theme.palette.primary.main} 5%, ${theme.palette.secondary.main} 30%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  sx={{ mt: -1 }}
                >
                  Sofware Generalist
                </Typography>
                <Stack>
                  <Stack direction="row" alignItems="center" gap={2}>
                    {Object.entries(languages).map(([key, value]) => (
                      <HoverableLanguage language={value} key={key} />
                    ))}
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" gap={1} pt={1}>
                  <SocialMediaLinks withoutLabels />
                </Stack>
              </Stack>
            </Stack>
            <Typography>
              Fredrik is a versatile professional with expertise in a broad range of technologies
              and disciplines. His core lies in all aspects of software development, and he excels
              in dynamic teams operating in fast-paced environments, prioritizing what is most
              important at any given moment. Fredrik is dedicated to problem-solving and has a
              passion for ongoing professional growth. As a team player at heart, he enjoys sharing
              his knowledge and supporting colleagues whenever possible.
            </Typography>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              gap={1}
            >
              <Stack direction="row" justifyContent="center" alignItems="center" gap={1}>
                <HighlightedSkill icon={<ReactJs />} label="React" />
                <HighlightedSkill icon={<NestJS />} label="NestJS" />
                <HighlightedSkill icon={<Leaf />} label="Spring Boot" />
                <HighlightedSkill icon={<LanguageTypescript />} label="Typescript" />
              </Stack>
              <Stack direction="row" justifyContent="center" alignItems="center" gap={1}>
                <HighlightedSkill icon={<LanguageKotlin />} label="Kotlin" />
                <HighlightedSkill icon={<MongoDB />} label="MongoDB" />
                <HighlightedSkill icon={<Kubernetes />} label="Kubernetes" />
                <HighlightedSkill icon={<Aws />} label="AWS" />
              </Stack>
            </Stack>
          </Stack>
          <Stack position="absolute" bottom={0} alignItems="center" pb={isSmallScreen ? 1 : 10}>
            <Typography variant="h6">
              Print{' '}
              <Link component={RouterLink} to="/pdf">
                PDF
              </Link>{' '}
              or
            </Typography>
            <Typography variant="h6">Find out more below</Typography>
            <SouthIcon />
          </Stack>
        </Stack>
      </Container>
      <Container maxWidth="lg">
        <Timeline experiences={experiencesState.experiences} />
        <Stack gap={1} alignItems="center" mt={5}>
          <Typography>Powered by</Typography>
          <Stack direction="row" gap={1} alignItems="center">
            <HighlightedSkill icon={<ReactJs />} label="React" />
            <Typography display="inline-block" variant="h6">
              &
            </Typography>
            <HighlightedSkill icon={<MaterialUi />} label="Material UI" />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
