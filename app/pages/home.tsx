import { HighlightedSkill } from '@/components/custom/highlighted-skill';
import { HoverableLanguage } from '@/components/custom/hoverable-language';
import { ProfilePicture } from '@/components/custom/profile-picture';
import { SocialMediaLink } from '@/components/custom/social-media-link';
import { Timeline } from '@/components/custom/timeline';
import { Badge } from '@/components/ui/badge';
import { experiences, topSkills } from '@/experience';
import ArrowDown from '@/icons/common/arrow-down.svg?react';
import Github from '@/icons/tech/github.svg?react';
import { languages } from '@/language/languages';
import { socialMediaLinks } from '@/links/socialMediaLinks';
import { poweredBySkills } from '@/skill/poweredBySkills';
import { skillIcon } from '@/skill/skillIcon';
import { softSkills } from '@/skill/softSkills';
import { Link } from 'react-router';

const App = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4 text-zinc-800 dark:text-zinc-300 fill-zinc-800 dark:fill-zinc-300">
      <div className="flex flex-col gap-4 items-center h-screen p-2 justify-start md:p-0 md:justify-center">
        <div className="flex flex-row items-center gap-4">
          <ProfilePicture />
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-4xl">Fredrik Pettersson</h1>
            <div className="flex flex-col items-start gap-2">
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Software Generalist
              </span>
              <div className="flex flex-row items-center gap-3">
                {Object.entries(languages).map(([key, value]) => (
                  <HoverableLanguage language={value} key={key} />
                ))}
              </div>
              <div className="flex flex-row flex-wrap gap-3">
                {socialMediaLinks.map((link) => (
                  <SocialMediaLink key={link.label} {...link} withoutLabel />
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-center lg:text-left">
          Fredrik is a versatile professional with expertise in a broad range of technologies and
          disciplines. His core lies in all aspects of software development, and he excels in
          dynamic teams operating in fast-paced environments, prioritizing what is most important at
          any given moment. Fredrik is dedicated to problem-solving and has a passion for ongoing
          professional growth. As a team player at heart, he enjoys sharing his knowledge and
          supporting colleagues whenever possible.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row flex-wrap justify-center items-center gap-2">
            {softSkills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center gap-2">
            {topSkills.map((skill) => (
              <HighlightedSkill key={skill} icon={skillIcon[skill]} label={skill} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-1 flex flex-col items-center">
          <p className="text-lg">
            Print{' '}
            <Link className="text-blue-500 hover:underline" to="/pdf">
              PDF
            </Link>{' '}
            or
          </p>
          <p className="text-lg">Find out more below</p>
          <ArrowDown className="text-2xl" />
        </div>
      </div>
      <Timeline experiences={experiences} />
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-3 items-center mt-5">
          <p className="text-xl">Powered by</p>
          <div className="flex flex-row gap-2 items-center">
            {poweredBySkills.map((skill) => (
              <HighlightedSkill key={skill} icon={skillIcon[skill]} label={skill} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center mb-2">
          <a href="https://www.github.com/hyperremix/resume" target="_blank" className="text-4xl">
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
