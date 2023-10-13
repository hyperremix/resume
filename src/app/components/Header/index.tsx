import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  AppBar,
  Avatar,
  Breakpoint,
  Container,
  IconButton,
  Stack,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useContext } from 'react';
import { ColorModeContext } from 'theme/ColorModeContext';

type Props = {
  maxWidth?: Breakpoint;
};

export const Header = ({ maxWidth }: Props) => {
  const theme = useTheme();

  const isExtraSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));

  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="static" sx={{ boxShadow: 0 }}>
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
        <IconButton
          sx={{ position: 'absolute', top: 16, right: 16 }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const Name = () => (
  <Typography sx={{ lineHeight: 1 }} variant="h4" noWrap>
    Fredrik Pettersson
  </Typography>
);

const Role = () => (
  <Typography variant="h6" noWrap gutterBottom>
    Software Generalist
  </Typography>
);

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

const ExtraSmallLayout = () => (
  <Stack alignItems="center" gap={1} py={2}>
    <Stack alignItems="center">
      <Name />
      <Role />
    </Stack>
    <ProfilePicture />
    <Pitch />
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
    </Stack>
  </Stack>
);
