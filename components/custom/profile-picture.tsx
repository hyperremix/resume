import Image from 'next/image';

type Props = {
  size?: number;
  className?: string;
};

export const ProfilePicture = ({ size = 40, className }: Props) => (
  <Image
    src={`https://ik.imagekit.io/hyperremix/resume/tr:w-${size * 8},h-${size * 8},fo-auto/profile`}
    alt="Profile Picture"
    width={size * 4}
    height={size * 4}
    priority
    className={`rounded-full ${className}`}
  />
);
