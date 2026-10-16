import { ContactList } from '@/components/custom/contact-list';
import { ExperienceList } from '@/components/custom/experience-list';
import { HighlightProvider } from '@/components/custom/highlight';
import { ProfilePicture } from '@/components/custom/profile-picture';
import { Reveal } from '@/components/custom/reveal';
import { SiteFooter } from '@/components/custom/site-footer';
import { SiteHeader } from '@/components/custom/site-header';
import { SkillsSection } from '@/components/custom/skills-section';
import { experiences } from '@/experience';
import { translations } from '@/i18n';
import { languages } from '@/language/languages';
import { socialMediaLinks } from '@/link/socialMediaLinks';
import { createFileRoute } from '@tanstack/react-router';
import { useTranslations } from 'use-intl';

export const Route = createFileRoute('/$locale/')({
  component: Home,
});

function Home() {
  const t = useTranslations();

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SiteHeader />

      <HighlightProvider>
        <main>
          {/* Identity first on small screens, in a side column from tablet width; the statement spans both rows there */}
          <section className="pt-6 pb-14 sm:pt-10 md:grid md:grid-cols-[1fr_14rem] md:grid-rows-[auto_1fr] md:gap-x-12 md:gap-y-8 lg:grid-cols-[1fr_17rem] lg:gap-x-16">
            <Reveal order={0} className="md:col-start-2 md:row-start-1 md:pt-2">
              <aside className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
                {/* Tinted towards the accent; resolves to colour on hover, or while pressed on touch screens */}
                <ProfilePicture
                  size={28}
                  className="size-16 shrink-0 transition-[filter] duration-500 sm:size-20 md:size-28 [filter:grayscale(1)_sepia(1)_hue-rotate(-50deg)_saturate(1.4)_brightness(0.95)] hover:[filter:none] active:[filter:none]"
                />
                <div>
                  <p className="font-serif text-lg leading-snug">{t(translations.name)}</p>
                  <p className="mt-0.5 font-sans text-sm text-muted">{t(translations.role)}</p>
                </div>
              </aside>
            </Reveal>

            <div className="mt-8 md:col-start-1 md:row-span-2 md:row-start-1 md:mt-0">
              <Reveal order={1}>
                <h1 className="max-w-[26ch] text-pretty font-serif text-3xl leading-[1.15] sm:text-4xl sm:leading-[1.12] lg:text-5xl">
                  {t(translations.headline)}
                </h1>
              </Reveal>
              <Reveal order={2}>
                <p className="mt-6 max-w-prose leading-relaxed sm:mt-8 sm:text-lg">
                  {t(translations.elevatorPitch)}
                </p>
              </Reveal>
            </div>

            <Reveal order={3} className="mt-8 md:col-start-2 md:row-start-2 md:mt-0 md:self-start">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1">
                <ContactList
                  links={socialMediaLinks}
                  className="flex flex-col gap-1.5 text-[15px]"
                />
                <ul
                  aria-label={t(translations.home.languagesHeader)}
                  className="flex flex-col gap-1.5 font-sans text-[15px]"
                >
                  {Object.entries(languages).map(([key, { icon, name, level }]) => (
                    <li key={key} className="flex items-center gap-2.5">
                      <span aria-hidden className="flex shrink-0">
                        {icon}
                      </span>
                      <span>
                        {t(name)} <span className="text-muted">{t(level)}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </section>

          <section aria-labelledby="experience" className="mt-4">
            <h2 id="experience" className="font-serif text-3xl leading-tight sm:text-4xl">
              {t(translations.home.experienceHeader)}
            </h2>
            <div className="mt-6">
              <ExperienceList experiences={experiences} />
            </div>
          </section>

          <div className="mt-24">
            <SkillsSection />
          </div>
        </main>
      </HighlightProvider>

      <SiteFooter />
    </div>
  );
}
