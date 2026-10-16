import { translations } from '@/i18n';
import MapMarker from '@/icons/common/map-marker';
import { cn } from '@/lib/utils';
import { Link } from '@/link/Link';
import { useTranslations } from 'use-intl';

type Props = {
  links: Link[];
  className?: string;
};

export const ContactList = ({ links, className }: Props) => {
  const t = useTranslations();

  return (
    <ul className={cn('font-sans', className)}>
      <li className="flex items-center gap-2.5">
        <MapMarker aria-hidden className="shrink-0 text-muted" />
        {t(translations.locationLabel)}
      </li>
      {links.map(({ href, icon, label, ariaLabel }) => (
        <li key={label} className="flex items-center gap-2.5">
          <span aria-hidden className="flex shrink-0 text-muted">
            {icon}
          </span>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={t(ariaLabel)}
            className="truncate underline decoration-rule underline-offset-4 hover:decoration-ink touch:py-[calc((2.75rem_-_1lh)/2)]"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};
