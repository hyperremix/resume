import { ProfilePicture } from '@/components/custom/profile-picture';
import { ExperienceSection } from '@/components/table/experience-section';
import { LocationTableLink } from '@/components/table/location-table-link';
import { SocialMediaTableLink } from '@/components/table/social-media-table-link';
import { TableStack } from '@/components/table/table-stack';
import { TableStackItem } from '@/components/table/table-stack-item';
import { Badge } from '@/components/ui/badge';
import { experiences, topSkills } from '@/experience';
import { LundUniversityExperience } from '@/experience/experiences/LundUniversityExperience';
import { translations } from '@/i18n';
import { languages } from '@/language/languages';
import { pdfSocialMediaLinks } from '@/link/socialMediaLinks';
import { skillConfig } from '@/skill/skillConfig';
import { useTranslations } from 'next-intl';
import React from 'react';

const Pdf = () => {
  const t = useTranslations();

  return (
    <div className="text-zinc-800 dark:text-zinc-300 fill-zinc-800 dark:fill-zinc-300">
      <TableStack gap={1} className="mx-auto">
        <TableStackItem>
          <TableStack direction="row" alignItems="center" gap={2}>
            <TableStackItem>
              <p className="text-lg font-bold">{t(translations.name)}</p>
              <p className="text-sm font-bold text-pink-500 pb-2">{t(translations.role)}</p>
              <p className="text-xs">{t(translations.elevatorPitch)}</p>
            </TableStackItem>
            <TableStackItem className="float-right w-48">
              <ProfilePicture size={30} />
            </TableStackItem>
          </TableStack>
        </TableStackItem>
        <TableStackItem>
          <TableStack direction="row" gap={2} className="mx-auto">
            <TableStackItem>
              <LocationTableLink />
            </TableStackItem>
            {pdfSocialMediaLinks.map((link, index) => (
              <TableStackItem key={index}>
                <SocialMediaTableLink link={link} />
              </TableStackItem>
            ))}
          </TableStack>
        </TableStackItem>
        <TableStackItem>
          <TableStack direction="row">
            <TableStackItem className="align-text-top w-48">
              <TableStack>
                <TableStackItem className="pb-1">
                  <h1 className="text-2xl font-bold border-b pb-1 mb-1">
                    {t(translations.pdf.topSkillsHeader)}
                  </h1>
                  <TableStack direction="column">
                    {topSkills.map((skill) => (
                      <TableStackItem key={skill}>
                        <Badge key={skill} variant="outline" className="mb-1">
                          {React.cloneElement(skillConfig[skill].icon ?? <></>, {
                            className: 'text-2xl font-bold',
                          })}
                          {skillConfig[skill].label && (
                            <p className="text-xs">{skillConfig[skill].label}</p>
                          )}
                        </Badge>
                      </TableStackItem>
                    ))}
                  </TableStack>
                </TableStackItem>
                <TableStackItem>
                  <h1 className="text-2xl font-bold border-b pb-1 mb-1">
                    {t(translations.pdf.languagesHeader)}
                  </h1>
                  <TableStack>
                    {Object.entries(languages).map(([key, { icon, name, level }]) => (
                      <TableStackItem key={key}>
                        <TableStack className="mb-1">
                          <TableStackItem>
                            <TableStack direction="row" alignItems="center" gap={2}>
                              <TableStackItem className="w-px">{icon}</TableStackItem>
                              <TableStackItem>
                                <p>{t(name)}</p>
                              </TableStackItem>
                            </TableStack>
                          </TableStackItem>
                          <TableStackItem>
                            <p className="text-xs">{t(level)}</p>
                          </TableStackItem>
                        </TableStack>
                      </TableStackItem>
                    ))}
                  </TableStack>
                </TableStackItem>
              </TableStack>
            </TableStackItem>
            <TableStackItem>
              <TableStack gap={2}>
                <TableStackItem>
                  <h1 className="text-2xl font-bold border-b pb-1 mb-1">
                    {t(translations.pdf.experiencesHeader)}
                  </h1>
                  <TableStack>
                    {experiences.map((experience) => (
                      <TableStackItem key={experience.slug}>
                        <ExperienceSection experience={experience} />
                      </TableStackItem>
                    ))}
                  </TableStack>
                </TableStackItem>
                <TableStackItem>
                  <h1 className="text-2xl font-bold border-b pb-1 mb-1">
                    {t(translations.pdf.educationHeader)}
                  </h1>
                  <ExperienceSection experience={LundUniversityExperience} />
                </TableStackItem>
              </TableStack>
            </TableStackItem>
          </TableStack>
        </TableStackItem>
      </TableStack>
    </div>
  );
};

export default Pdf;
