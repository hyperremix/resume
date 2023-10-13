import { SvgIcon, useTheme } from '@mui/material';
import * as React from 'react';

export const Expo = () => {
  const theme = useTheme();

  return (
    <SvgIcon sx={{ marginTop: 0.5, marginLeft: 1, marginRight: -1 }}>
      <svg viewBox="0 0 24 24" role="img">
        <path
          d="M9.477 7.638c.164-.24.343-.27.488-.27.145 0 .387.03.551.27 2.13 2.901 6.55 10.56 6.959 10.976.605.618 1.436.233 1.918-.468.475-.69.607-1.174.607-1.69 0-.352-6.883-13.05-7.576-14.106-.667-1.017-.884-1.274-2.025-1.274h-.854c-1.138 0-1.302.257-1.969 1.274C6.883 3.406 0 16.104 0 16.456c0 .517.132 1 .607 1.69.482.7 1.313 1.086 1.918.468.41-.417 4.822-8.075 6.952-10.977z"
          fill={theme.palette.action.active}
        />
      </svg>
    </SvgIcon>
  );
};
