import { Modal } from '@mui/material';
import { IKImage } from 'imagekitio-react';
import React, { useState } from 'react';

type Props = {
  size?: number;
};

export const ProfilePicture = ({ size = 240 }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
        onClick={() => setIsModalOpen(true)}
      />
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <IKImage
          path="/profile-primary"
          transformation={[
            {
              width: `768`,
              height: `768`,
              focus: 'auto',
            },
          ]}
          lqip={{ active: true }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${768 / 2}px`,
            height: `${768 / 2}px`,
          }}
        />
      </Modal>
    </>
  );
};
