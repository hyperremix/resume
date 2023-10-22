import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import { selectTheme } from './slice/selectors';

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  useThemeSlice();

  const themeState = useSelector(selectTheme);

  const theme = useMemo(() => {
    const themeOptions: ThemeOptions = {
      palette: {
        mode: themeState.darkMode ? 'dark' : 'light',
      },
      typography:
        themeState.typographySize === 'pdf'
          ? {
              h4: {
                fontSize: 18,
                lineHeight: 1.22,
                letterSpacing: 0.1176,
              },
              h6: {
                fontSize: 12,
                lineHeight: 1.16,
                letterSpacing: 0.12,
              },
              caption: {
                fontSize: 10,
                lineHeight: 1.2,
                letterSpacing: 0.53328,
              },
              body1: {
                fontSize: 10,
                lineHeight: 1.2,
                letterSpacing: 0.15008,
              },
            }
          : {},
    };
    return themeState.typographySize === 'pdf'
      ? createTheme(themeOptions)
      : responsiveFontSizes(createTheme(themeOptions));
  }, [themeState]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
