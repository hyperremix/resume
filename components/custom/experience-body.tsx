import { TExperience } from '@/experience/TExperience';
import { useTranslations } from 'use-intl';
import { SkillBadge } from './skill-badge';

type Props = {
  experience: TExperience;
  // h4 under an accordion row (h3), h2 on the experience's own page (h1)
  roleHeading: 'h2' | 'h4';
};

export const ExperienceBody = ({
  experience: { companyDescription, roles, skills },
  roleHeading: RoleHeading,
}: Props) => {
  const t = useTranslations();
  const describedRoles = roles?.filter((role) => role.description?.length);

  return (
    <div className="flex max-w-prose flex-col gap-6">
      {companyDescription && <p className="text-muted">{t(companyDescription)}</p>}
      {describedRoles?.map((role) => (
        <section key={role.title}>
          <RoleHeading className="font-sans text-sm font-medium">{t(role.title)}</RoleHeading>
          {role.description?.map((paragraph) => (
            <p key={paragraph} className="mt-2">
              {t(paragraph)}
            </p>
          ))}
        </section>
      ))}
      {skills && (
        <ul className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <li key={skill}>
              <SkillBadge skill={skill} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
