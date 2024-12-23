import { translations } from '@/i18n';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type Props = {
  size?: number;
  className?: string;
};

export const ProfilePicture = ({ size = 40, className }: Props) => {
  const t = useTranslations();

  return (
    <Image
      src={`https://ik.imagekit.io/hyperremix/resume/tr:w-${size * 8},h-${size * 8},fo-auto/profile`}
      alt={t(translations.profilePictureAriaLabel)}
      width={size * 4}
      height={size * 4}
      priority
      className={`rounded-full ${className}`}
    />
  );
};
