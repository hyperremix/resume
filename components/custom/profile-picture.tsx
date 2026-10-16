import { translations } from '@/i18n';
import { useTranslations } from 'use-intl';

type Props = {
  size?: number;
  className?: string;
};

export const ProfilePicture = ({ size = 40, className }: Props) => {
  const t = useTranslations();

  return (
    <img
      src={`https://ik.imagekit.io/hyperremix/resume/tr:w-${size * 8},h-${size * 8},fo-auto/profile`}
      alt={t(translations.profilePictureAriaLabel)}
      width={size * 4}
      height={size * 4}
      fetchPriority="high"
      className={`rounded-full ${className}`}
    />
  );
};
