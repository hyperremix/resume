import { ProfilePicture } from '@/components/custom/profile-picture';
import { ExperienceSection } from '@/components/table/experience-section';
import { TableStack } from '@/components/table/table-stack';
import { TableStackItem } from '@/components/table/table-stack-item';
import { Badge } from '@/components/ui/badge';
import { experiences, topSkills } from '@/experience';
import { LundUniversityExperience } from '@/experience/experiences/LundUniversityExperience';
import { languages } from '@/language/languages';
import { socialMediaLinks } from '@/links/socialMediaLinks';
import { skillIcon } from '@/skill/skillIcon';
import React from 'react';
import { Link } from 'react-router';

const Pdf = () => {
  return (
    <div className="text-zinc-800 dark:text-zinc-300 fill-zinc-800 dark:fill-zinc-300">
      <TableStack gap={1} className="mx-auto">
        <TableStackItem>
          <TableStack direction="row" alignItems="center">
            <TableStackItem>
              <p className="text-lg">Fredrik Pettersson</p>
              <p className="text-sm text-pink-500 pb-2">Software Generalist</p>
              <p className="text-xs">
                A generalist at heart with skills both deep and wide within software development. At
                home in fast-paced environments with a focus on what is important. A mentor with a
                passion for personal growth. Enjoys sharing his experience and knowledge with
                others.
              </p>
            </TableStackItem>
            <TableStackItem className="w-20">
              <ProfilePicture size={20} />
            </TableStackItem>
          </TableStack>
        </TableStackItem>
        <TableStackItem>
          <TableStack direction="row" gap={2} className="mx-auto">
            {socialMediaLinks.map(({ label, icon, href }, index) => (
              <TableStackItem key={index}>
                <Link to={href ?? ''} color="inherit" target="_blank" className="hover:underline">
                  <TableStack
                    direction="row"
                    alignItems="center"
                    className="w-px whitespace-nowrap"
                  >
                    <TableStackItem>{icon}</TableStackItem>
                    <TableStackItem>
                      <p className="text-xs">{label}</p>
                    </TableStackItem>
                  </TableStack>
                </Link>
              </TableStackItem>
            ))}
          </TableStack>
        </TableStackItem>
        <TableStackItem>
          <TableStack direction="row">
            <TableStackItem className="w-1/4 align-text-top">
              <TableStack>
                <TableStackItem className="pb-1">
                  <p className="text-2xl border-b border-zinc-800 dark:border-zinc-300 pb-1 mb-1">
                    Top Skills
                  </p>
                  {topSkills.map((skill) => (
                    <p className="mb-1" key={skill}>
                      <Badge key={skill} variant="outline">
                        {React.cloneElement(skillIcon[skill] ?? <></>, { className: 'text-2xl' })}
                        <p className="text-xs">{skill}</p>
                      </Badge>
                    </p>
                  ))}
                </TableStackItem>
                <TableStackItem>
                  <p className="text-2xl border-b border-zinc-800 dark:border-zinc-300 pb-1 mb-1">
                    Languages
                  </p>
                  <TableStack>
                    {Object.entries(languages).map(([key, { icon, name, level }]) => (
                      <TableStackItem key={key}>
                        <TableStack className="mb-1">
                          <TableStackItem>
                            <TableStack direction="row" alignItems="center" gap={2}>
                              <TableStackItem className="w-px">{icon}</TableStackItem>
                              <TableStackItem>
                                <p>{name}</p>
                              </TableStackItem>
                            </TableStack>
                          </TableStackItem>
                          <TableStackItem>
                            <p className="text-xs">{level}</p>
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
                  <p className="text-2xl border-b border-zinc-800 dark:border-zinc-300 pb-1 mb-1">
                    Experiences
                  </p>
                  <TableStack>
                    {experiences.map((experience) => (
                      <TableStackItem key={experience.slug}>
                        <ExperienceSection experience={experience} />
                      </TableStackItem>
                    ))}
                  </TableStack>
                </TableStackItem>
                <TableStackItem>
                  <p className="text-2xl border-b border-zinc-800 dark:border-zinc-300 pb-1 mb-1">
                    Education
                  </p>
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
