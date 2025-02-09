import { HighlightedSkill } from '@/components/custom/highlighted-skill';
import { HoverableLanguage } from '@/components/custom/hoverable-language';
import { LocationLink } from '@/components/custom/location-link';
import { ProfilePicture } from '@/components/custom/profile-picture';
import { SkillLevels } from '@/components/custom/skill-levels';
import { SocialMediaLink } from '@/components/custom/social-media-link';
import { Timeline } from '@/components/custom/timeline';
import { Typography } from '@/components/custom/typography';
import { Badge } from '@/components/ui/badge';
import { experiences, topSkills } from '@/experience';
import { translations } from '@/i18n';
import { Link } from '@/i18n/routing';
import ArrowDown from '@/icons/common/arrow-down';
import Github from '@/icons/tech/github';
import { languages } from '@/language/languages';
import { socialMediaLinks } from '@/link/socialMediaLinks';
import { poweredBySkills } from '@/skill/poweredBySkills';
import { softSkills } from '@/skill/softSkills';
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations();

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4">
      <div className="flex flex-col gap-4 items-center h-screen p-2 justify-start md:p-0 md:justify-center">
        <div className="flex flex-row items-center gap-4">
          <ProfilePicture className="size-28 sm:size-40" />
          <div className="flex flex-col">
            <Typography variant="h1">{t(translations.name)}</Typography>
            <div className="flex flex-col items-start gap-2">
              <Typography
                variant="h2"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              >
                {t(translations.role)}
              </Typography>
              <div className="flex flex-row items-center gap-3">
                {Object.entries(languages).map(([key, value]) => (
                  <HoverableLanguage language={value} key={key} />
                ))}
              </div>
              <div className="flex flex-row flex-wrap gap-3">
                <LocationLink />
                {socialMediaLinks.map((link) => (
                  <SocialMediaLink key={link.label} link={link} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Typography className="text-center lg:text-left">
          {t(translations.elevatorPitch)}
        </Typography>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row flex-wrap justify-center items-center gap-2">
            {softSkills.map((skill) => (
              <Badge key={skill}>{<Typography variant="small">{t(skill)}</Typography>}</Badge>
            ))}
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center gap-2">
            {topSkills.map((skill) => (
              <HighlightedSkill key={skill} skill={skill} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-1 flex flex-col items-center">
          <Typography variant="h4">
            {`${t(translations.home.view)} `}
            <Link
              className="underline text-blue-500 hover:text-blue-700 visited:text-purple-500"
              href="/pdf"
            >
              {t(translations.home.pdf)}
            </Link>
            {` ${t(translations.home.or)}`}
          </Typography>
          <Typography variant="h4">{t(translations.home.findOutMoreBelow)}</Typography>
          <ArrowDown className="text-2xl" />
        </div>
      </div>
      <Timeline experiences={experiences} />
      <SkillLevels />
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-3 items-center mt-5">
          <Typography variant="h3">{t(translations.home.builtWith)}</Typography>
          <div className="flex flex-row gap-2 items-center">
            {poweredBySkills.map((skill) => (
              <HighlightedSkill key={skill} skill={skill} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center mb-2">
          <a
            href="https://www.github.com/hyperremix/resume"
            target="_blank"
            className="text-4xl"
            aria-label="GitHub repo"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
