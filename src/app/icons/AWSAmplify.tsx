import { SvgIcon, useTheme } from '@mui/material';
import * as React from 'react';

export const AWSAmplify = () => {
  const theme = useTheme();

  return (
    <SvgIcon sx={{ marginTop: -0.6, marginLeft: 0.5, marginRight: -0.5 }}>
      <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <g>
          <g
            display="none"
            overflow="visible"
            y="0"
            x="0"
            height="100%"
            width="100%"
            id="canvasGrid"
          >
            <rect
              fill={theme.palette.action.active}
              strokeWidth="0"
              y="0"
              x="0"
              height="100%"
              width="100%"
            />
          </g>
        </g>
        <g>
          <g stroke="null" id="svg_13">
            <g
              stroke="null"
              transform="matrix(0.24427158490029297,0,0,0.262266745435647,0.3869015167067027,7.026955368797123) "
              fillRule="evenodd"
              fill="none"
              id="svg_7"
            >
              <g stroke="null" id="svg_8">
                <path
                  stroke="null"
                  fill={theme.palette.action.active}
                  id="svg_10"
                  d="m59.53671,37.84041l9.09583,15.76109l-17.72754,30.69616l35.44214,0l9.05828,15.69542l-71.74389,0l25.28086,-43.80786l10.59432,-18.34481zm35.85473,-31.84733l54.27009,94l-17.50228,0l-54.24809,-94l17.48028,0zm-22.34116,8.41854l49.42572,85.5812l-17.50358,0l-40.65548,-70.44849l8.73334,-15.13271z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
};
