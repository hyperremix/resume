import { Box, Fade, Link, Stack, Typography, useTheme } from '@mui/material';
import { socialMediaLinks } from 'links/socialMediaLinks';
import React, { ReactNode, useState } from 'react';

export const SocialMediaLinks = ({ withoutLabels = false }: { withoutLabels?: boolean }) => (
  <Stack direction="row" gap={1.5} flexWrap="wrap">
    {socialMediaLinks.map((link) => (
      <SocialMediaLink key={link.label} {...link} withoutLabel={withoutLabels} />
    ))}
  </Stack>
);

type Props = {
  label: string;
  icon: ReactNode;
  href?: string;
  withoutLabel?: boolean;
};

const SocialMediaLink = ({ href, icon, label, withoutLabel }: Props) => {
  const theme = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  const socialMediaLinkComponent = (
    <Stack
      direction="row"
      gap={1}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchEnd={() => setIsHovered(!isHovered)}
      position="relative"
    >
      <Box sx={{ color: isHovered ? theme.palette.primary.main : theme.palette.text.primary }}>
        {icon}
      </Box>
      {!withoutLabel && <Typography>{label}</Typography>}
      {withoutLabel && (
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
            <Typography noWrap>{label}</Typography>
          </Box>
        </Fade>
      )}
    </Stack>
  );

  if (!href) return socialMediaLinkComponent;

  return (
    <Link href={href} color="inherit" underline="hover" target="_blank">
      {socialMediaLinkComponent}
    </Link>
  );
};
