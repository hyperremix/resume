import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  AppBar,
  Breakpoint,
  Container,
  IconButton,
  Stack,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeSlice } from 'theme/slice';
import { selectTheme } from 'theme/slice/selectors';
import { ProfilePicture } from '../ProfilePicture';

type Props = {
  maxWidth?: Breakpoint;
};

export const Header = ({ maxWidth }: Props) => {
  const dispatch = useDispatch();
  const { actions } = useThemeSlice();

  const { darkMode } = useSelector(selectTheme);

  const isExtraSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));

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
          onClick={() => dispatch(actions.setDarkMode(!darkMode))}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
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
