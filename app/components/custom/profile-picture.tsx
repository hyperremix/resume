import { IKImage } from 'imagekitio-react';

type Props = {
  size?: number;
  className?: string;
};

export const ProfilePicture = ({ size = 8, className }: Props) => (
  <IKImage
    path="/profile"
    transformation={[
      {
        width: `${size * 20}`,
        height: `${size * 20}`,
        focus: 'auto',
      },
    ]}
    lqip={{ active: true }}
    className={`size-${size} rounded-full ${className}`}
  />
);
