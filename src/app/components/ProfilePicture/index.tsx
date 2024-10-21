import { IKImage } from 'imagekitio-react';
import React from 'react';

type Props = {
  size?: number;
};

export const ProfilePicture = ({ size = 240 }: Props) => (
  <IKImage
    path="/profile-primary"
    transformation={[
      {
        width: `${size}`,
        height: `${size}`,
        focus: 'auto',
      },
    ]}
    lqip={{ active: true }}
    style={{ borderRadius: '50%', width: `${size / 2}px`, height: `${size / 2}px` }}
  />
);
