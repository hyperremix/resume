'use client';

import { TExperience } from '@/experience/TExperience';
import { Link } from '@/i18n/routing';
import OpenInNew from '@/icons/common/open-in-new';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { HighlightedSkill } from './highlighted-skill';
import { TimePeriod } from './time-period';

export const Experience = ({
  experience,
  isOnRight,
}: {
  experience: TExperience;
  isOnRight: boolean;
}) => {
  return (
    <div className="flex flex-row sm:gap-11">
      {isOnRight && (
        <>
          <div className="w-0 sm:w-1/2" />
          <RightExperience experience={experience} />
        </>
      )}
      {!isOnRight && (
        <>
          <LeftExperience experience={experience} />
          <div className="w-0 sm:w-1/2" />
        </>
      )}
    </div>
  );
};

const RightExperience = ({
  experience: { slug, icon, title, roles, from, to, projectDescription, highlightedSkills },
}: {
  experience: TExperience;
}) => {
  const t = useTranslations();

  return (
    <motion.div
      className="p-2 flex flex-col w-full sm:w-1/2 hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer rounded-md"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <Link href={{ pathname: '/experiences/[slug]', params: { slug: slug } }}>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between gap-1 w-full">
            <div className="flex flex-row items-center gap-2 relative">
              <div className="sm:absolute sm:-left-10 sm:top-1 sm:-ml-0.5 text-2xl">{icon}</div>
              <span className="text-2xl">{t(title)}</span>
            </div>
            <OpenInNew className="sm:hidden " />
          </div>

          <div className="sm:ml-4.5 relative h-full before:absolute before:bg-zinc-950 dark:before:bg-zinc-300 before:h-full sm:before:w-1 sm:before:-left-8 before:top-2">
            <p>{roles?.map((role) => t(role.title)).join(' | ')}</p>
            <TimePeriod from={from} to={to} />
            {projectDescription && <p className="pt-1">{t(projectDescription)}</p>}
            {highlightedSkills && (
              <div className="flex flex-row justify-start gap-2 flex-wrap py-3">
                {highlightedSkills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <HighlightedSkill key={skill} skill={skill} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const LeftExperience = ({
  experience: { slug, icon, title, roles, from, to, projectDescription, highlightedSkills },
}: {
  experience: TExperience;
}) => {
  const t = useTranslations();

  return (
    <motion.div
      className="p-2 flex flex-col w-full sm:w-1/2 hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer rounded-md"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <Link href={{ pathname: '/experiences/[slug]', params: { slug: slug } }}>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between sm:justify-end gap-1 w-full">
            <div className="flex flex-row items-center gap-2 relative">
              <div className="sm:absolute sm:-right-10 sm:top-1 sm:-mr-0.5 text-2xl">{icon}</div>
              <span className="text-2xl">{t(title)}</span>
            </div>
            <OpenInNew className="sm:hidden " />
          </div>

          <div className="sm:mr-4.5 relative h-full before:absolute before:bg-zinc-950 dark:before:bg-zinc-300 before:h-full sm:before:w-1 sm:before:-right-8 before:top-2 flex flex-col items-start sm:items-end">
            <p>{roles?.map((role) => t(role.title)).join(' | ')}</p>
            <TimePeriod from={from} to={to} />
            {projectDescription && (
              <p className="pt-1 text-start sm:text-end">{t(projectDescription)}</p>
            )}
            {highlightedSkills && (
              <div className="flex flex-row justify-end gap-2 flex-wrap py-3 w-full">
                {highlightedSkills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                      delay: ((highlightedSkills?.length ?? 0) - 1 - i) * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <HighlightedSkill key={skill} skill={skill} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
