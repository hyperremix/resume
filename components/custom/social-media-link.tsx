import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Link } from '@/link/Link';
import { useTranslations } from 'next-intl';

type Props = {
  link: Link;
};

export const SocialMediaLink = ({ link: { href, icon, label, ariaLabel } }: Props) => {
  const t = useTranslations();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger className="text-2xl" aria-label={t(ariaLabel)}>
          {href ? (
            <a href={href} color="inherit" target="_blank" aria-label={t(ariaLabel)}>
              {icon}
            </a>
          ) : (
            icon
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
