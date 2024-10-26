import { Box, Fade, Typography } from '@mui/material';
import { TLanguage } from 'languages/TLanguage';
import * as React from 'react';

type Props = {
  language: TLanguage;
};

export const HoverableLanguage = ({ language: { icon, name, level } }: Props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchEnd={() => setIsHovered(!isHovered)}
    >
      {icon}
      <Fade in={isHovered} {...(isHovered ? { timeout: 500 } : {})}>
        <Box
          sx={{
            position: 'absolute',
            bottom: -30,
            left: '50%',
            transform: 'translate(-50%)',
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: '4px',
            px: 0.5,
          }}
        >
          <Typography noWrap>{name + ' - ' + level}</Typography>
        </Box>
      </Fade>
    </Box>
  );
};
