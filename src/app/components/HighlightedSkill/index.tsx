import { Avatar, Box, Fade, Link, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { ReactNode, useState } from 'react';

type Props = {
  icon: ReactNode;
  label: string;
  href?: string;
};

export const HighlightedSkill = ({ icon, label, href }: Props) => {
  const theme = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchEnd={() => setIsHovered(!isHovered)}
    >
      {href ? (
        <Link href={href} color="inherit" underline="hover" target="_blank">
          <Avatar sx={{ backgroundColor: isHovered ? theme.palette.primary.main : undefined }}>
            {icon}
          </Avatar>
        </Link>
      ) : (
        <Avatar sx={{ backgroundColor: isHovered ? theme.palette.primary.main : undefined }}>
          {icon}
        </Avatar>
      )}
      <Fade in={isHovered} {...(isHovered ? { timeout: 500 } : {})}>
        <Box
          sx={{
            position: 'absolute',
            bottom: -30,
            left: '50%',
            transform: 'translate(-50%)',
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '4px',
            px: 0.5,
          }}
        >
          <Typography noWrap>{label}</Typography>
        </Box>
      </Fade>
    </Box>
  );
};
