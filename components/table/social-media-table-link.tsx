import { Link } from '@/link/Link';
import { useTranslations } from 'next-intl';
import { TableStack } from './table-stack';
import { TableStackItem } from './table-stack-item';

type Props = {
  link: Link;
};

export const SocialMediaTableLink = ({ link: { href, icon, label, ariaLabel } }: Props) => {
  const t = useTranslations();

  return (
    <a
      href={href ?? ''}
      color="inherit"
      target="_blank"
      className="hover:underline"
      aria-label={t(ariaLabel)}
    >
      <TableStack direction="row" alignItems="center" className="w-px whitespace-nowrap">
        <TableStackItem className="fill-zinc-800 dark:fill-zinc-300">{icon}</TableStackItem>
        <TableStackItem>
          <p className="text-xs">{label}</p>
        </TableStackItem>
      </TableStack>
    </a>
  );
};
