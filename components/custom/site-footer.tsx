import { translations } from '@/i18n';
import { poweredBySkills } from '@/skill/poweredBySkills';
import { skillConfig } from '@/skill/skillConfig';
import { useFormatter, useTranslations } from 'use-intl';

export const SiteFooter = () => {
  const t = useTranslations();
  const format = useFormatter();
  const tools = format.list(poweredBySkills.map((skill) => skillConfig[skill].label ?? skill));

  return (
    <footer className="mt-24 border-t border-rule py-8 font-sans text-sm text-muted">
      <p>
        {t(translations.home.builtWith)} {tools}.{' '}
        <a
          href="https://github.com/hyperremix/resume"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-rule underline-offset-4 hover:text-ink touch:-my-3 touch:inline-flex touch:min-h-11 touch:items-center"
        >
          {t(translations.home.sourceCode)}
        </a>
        .
      </p>
    </footer>
  );
};
