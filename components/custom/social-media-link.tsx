import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Link } from '@/link/Link';

type Props = {
  link: Link;
  withoutLabel?: boolean;
};

export const SocialMediaLink = ({
  link: { href, icon, label, ariaLabel },
  withoutLabel,
}: Props) => (
  <TooltipProvider>
    <Tooltip delayDuration={0}>
      <TooltipTrigger className="text-2xl" aria-label={label}>
        {href ? (
          <a href={href} color="inherit" target="_blank" aria-label={ariaLabel}>
            {icon}
            {!withoutLabel && <p>{label}</p>}
          </a>
        ) : (
          <>
            {icon}
            {!withoutLabel && <p>{label}</p>}
          </>
        )}
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
