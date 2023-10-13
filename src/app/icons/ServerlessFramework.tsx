import { SvgIcon, useTheme } from '@mui/material';
import * as React from 'react';

export const ServerlessFramework = () => {
  const theme = useTheme();

  return (
    <SvgIcon sx={{ marginLeft: 1, marginRight: -0.5 }}>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2,22.419H6.956L5.42,27H2ZM2,13.71H9.875L8.34,18.29H2ZM2,5H12.794L11.259,9.581H2ZM17.679,5H30V9.581H16.143ZM13.224,18.291,14.76,13.71H30v4.581Zm-1.383,4.128H30V27H10.305Z"
          fill={theme.palette.action.active}
          fillRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
};
