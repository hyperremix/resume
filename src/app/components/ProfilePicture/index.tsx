import { IKImage } from 'imagekitio-react';
import React from 'react';

export const ProfilePicture = () => (
  <IKImage
    path="/profile-primary"
    transformation={[
      {
        width: '240',
        height: '240',
        focus: 'auto',
      },
    ]}
    lqip={{ active: true }}
    style={{ borderRadius: '50%', width: '120px', height: '120px' }}
  />
);
