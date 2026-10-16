import { ContactList } from '@/components/custom/contact-list';
import { PeriodDetail } from '@/components/custom/period';
import { ProfilePicture } from '@/components/custom/profile-picture';
import { experiences, getMonthsWithSkill, topSkills } from '@/experience';
import { LundUniversityExperience } from '@/experience/experiences/LundUniversityExperience';
import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import { languages } from '@/language/languages';
import { cn } from '@/lib/utils';
import { pdfSocialMediaLinks } from '@/link/socialMediaLinks';
import { skillConfig } from '@/skill/skillConfig';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useLocale, useTranslations } from 'use-intl';

export const Route = createFileRoute('/$locale/pdf')({
  component: Pdf,
});

const workExperiences = experiences.filter((experience) => experience !== LundUniversityExperience);

function Pdf() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="light-only min-h-screen bg-paper text-ink">
      <main className="mx-auto max-w-[210mm] px-6 py-6 print:max-w-none print:p-0">
        <div className="mb-8 flex gap-5 font-sans text-sm print:hidden">
          <Link
            to="/$locale"
            params={{ locale }}
            className="text-muted hover:text-ink touch:flex touch:min-h-11 touch:items-center"
          >
            {t(translations.pdf.back)}
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="text-muted hover:text-ink touch:min-h-11 touch:min-w-11"
          >
            {t(translations.pdf.print)}
          </button>
        </div>

        <header className="flex items-start justify-between gap-6 border-b border-rule pb-5">
          <div>
            <h1 className="font-serif text-3xl leading-tight">{t(translations.name)}</h1>
            <p className="mt-1 font-sans text-sm text-muted">{t(translations.role)}</p>
            <p className="mt-3 max-w-prose text-sm leading-relaxed">
              {t(translations.elevatorPitch)}
            </p>
          </div>
          <ProfilePicture size={22} className="size-[88px] shrink-0" />
        </header>

        <ContactList
          links={pdfSocialMediaLinks}
          className="flex flex-wrap gap-x-5 gap-y-1 border-b border-rule py-3 text-xs"
        />

        {/* A floated sidebar rather than a grid: WebKit pushes a grid taller than a page onto a fresh page */}
        <div className="mt-6 flow-root">
          <aside className="sm:float-left sm:w-[44mm]">
            <PdfHeading>{t(translations.pdf.topSkillsHeader)}</PdfHeading>
            <ul className="mt-2 flex flex-col gap-1.5 font-sans text-sm">
              {topSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  {skillConfig[skill].icon && (
                    <span aria-hidden className="flex shrink-0 text-base">
                      {skillConfig[skill].icon}
                    </span>
                  )}
                  <span>
                    {skill}{' '}
                    <span className="text-muted">
                      {t(translations.skillYears, {
                        years: Math.round(getMonthsWithSkill(skill) / 12),
                      })}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <PdfHeading className="mt-6">{t(translations.pdf.languagesHeader)}</PdfHeading>
            <ul className="mt-2 flex flex-col gap-1.5 font-sans text-sm">
              {Object.entries(languages).map(([key, { icon, name, level }]) => (
                <li key={key} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 flex shrink-0">
                    {icon}
                  </span>
                  <span>
                    {t(name)}
                    <span className="block text-muted">{t(level)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="mt-6 sm:mt-0 sm:ml-[calc(44mm+2rem)]">
            <PdfHeading>{t(translations.pdf.experiencesHeader)}</PdfHeading>
            {workExperiences.map((experience) => (
              <PdfExperience key={experience.slug} experience={experience} />
            ))}

            <PdfHeading className="mt-8">{t(translations.pdf.educationHeader)}</PdfHeading>
            <PdfExperience experience={LundUniversityExperience} />
          </div>
        </div>
      </main>
    </div>
  );
}

const PdfHeading = ({ className, children }: { className?: string; children: string }) => (
  <h2 className={cn('border-b border-rule pb-1 font-serif text-lg', className)}>{children}</h2>
);

const PdfExperience = ({
  experience: {
    title,
    icon,
    from,
    to,
    roles,
    companyDescription,
    projectDescription,
    skills,
    subExperiences,
  },
  nested = false,
}: {
  experience: TExperience;
  nested?: boolean;
}) => {
  const t = useTranslations();

  return (
    <article className={cn('mt-4', nested && 'ml-3 border-l border-rule pl-4')}>
      {/* Keep the heading with its first lines when a page breaks */}
      <div className="break-inside-avoid break-after-avoid">
        <h3 className="flex items-center gap-2 font-serif text-base font-medium">
          {icon && (
            <span aria-hidden className="flex shrink-0">
              {icon}
            </span>
          )}
          {t(title)}
        </h3>
        <p className="font-sans text-xs text-muted tabular-nums">
          {roles && <>{roles.map((role) => t(role.title)).join(', ')}, </>}
          <PeriodDetail from={from} to={to} />
        </p>
        {projectDescription && <p className="mt-1.5 text-sm">{t(projectDescription)}</p>}
      </div>
      {companyDescription && <p className="mt-1.5 text-xs text-muted">{t(companyDescription)}</p>}
      {roles?.map((role) =>
        role.description?.map((paragraph) => (
          <p key={paragraph} className="mt-1.5 text-xs leading-relaxed">
            {t(paragraph)}
          </p>
        )),
      )}
      {skills && <p className="mt-1.5 font-sans text-xs text-muted">{skills.join(', ')}</p>}
      {subExperiences?.map((sub) => (
        <PdfExperience key={sub.slug} experience={sub} nested />
      ))}
    </article>
  );
};
