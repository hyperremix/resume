import { SvgIcon, useTheme } from '@mui/material';
import * as React from 'react';

export const Kibana = () => {
  const theme = useTheme();

  return (
    <SvgIcon sx={{ marginLeft: 1, marginRight: -1, marginTop: 0.6 }}>
      <svg
        fill={theme.palette.action.active}
        viewBox="0 0 30 30"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.04 23.99H4.18l9.88-11.86c4.23 2.76 6.98 7.04 6.98 11.86zm0-23.95H3.08v21.55z" />
      </svg>
    </SvgIcon>
  );
};
