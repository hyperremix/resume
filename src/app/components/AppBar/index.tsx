import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import {
  Avatar,
  Breakpoint,
  Container,
  AppBar as MuiAppBar,
  Stack,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { SocialMediaLink } from '../SocialMediaLink';

type Props = {
  maxWidth?: Breakpoint;
};

export const AppBar = ({ maxWidth }: Props) => {
  const isExtraSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));

  return (
    <MuiAppBar position="static" sx={{ boxShadow: 0 }}>
      <Toolbar sx={{ p: 0 }}>
        <Container maxWidth={maxWidth}>
          {isExtraSmallScreen ? (
            <ExtraSmallLayout />
          ) : isSmallScreen ? (
            <SmallLayout />
          ) : (
            <LargeLayout />
          )}
        </Container>
      </Toolbar>
    </MuiAppBar>
  );
};

const Name = () => (
  <Typography sx={{ lineHeight: 1 }} variant="h4" noWrap>
    Fredrik Pettersson
  </Typography>
);

const Role = () => {
  const theme = useTheme();

  return (
    <Typography sx={{ color: theme.palette.primary.main }} variant="h6" noWrap gutterBottom>
      Software Generalist
    </Typography>
  );
};

const Pitch = () => (
  <Typography gutterBottom>
    A generalist at heart with skills both deep and wide within software development. At home in
    fast-paced environments with a focus on what is important. A mentor with a passion for personal
    growth. Enjoys sharing his experience and knowledge with others.
  </Typography>
);

const ProfilePicture = () => (
  <Avatar
    alt="Fredrik Pettersson"
    src="https://s.gravatar.com/avatar/e358a919f2a68d4dc95e586d76feaac6f3defb7104dabf9c303c76e077a91065?s=240"
    sx={{ width: 120, height: 120 }}
  />
);

const SocialMediaLinks = () => (
  <Stack direction="row" gap={1.5} flexWrap="wrap" justifyContent="center">
    <SocialMediaLink icon={<PlaceIcon />} title="Hamburg, Germany" />
    <SocialMediaLink
      icon={<GitHubIcon />}
      href="https://github.com/hyperremix"
      title="github.com/hyperremix"
    />
    <SocialMediaLink
      icon={<LinkedInIcon />}
      href="https://www.linkedin.com/in/fredpe/"
      title="linkedin.com/in/fredpe"
    />
  </Stack>
);

const ExtraSmallLayout = () => (
  <Stack alignItems="center" gap={1} py={2}>
    <Stack alignItems="center">
      <Name />
      <Role />
    </Stack>
    <ProfilePicture />
    <Pitch />
    <SocialMediaLinks />
  </Stack>
);

const SmallLayout = () => (
  <Stack>
    <Stack
      flex={1}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      gap={4}
      py={2}
    >
      <Stack>
        <Name />
        <Role />
      </Stack>
      <ProfilePicture />
    </Stack>
    <Pitch />
    <Stack alignItems="center" py={2}>
      <SocialMediaLinks />
    </Stack>
  </Stack>
);

const LargeLayout = () => (
  <Stack p={2} alignItems="center" gap={2}>
    <Stack flex={1} direction="row" justifyContent="space-between" alignItems="center" gap={6}>
      <Stack>
        <Name />
        <Role />
        <Pitch />
      </Stack>
      <ProfilePicture />
      <Stack direction="row" gap={1}></Stack>
    </Stack>
    <SocialMediaLinks />
  </Stack>
);
