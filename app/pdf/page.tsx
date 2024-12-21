import { ProfilePicture } from '@/components/custom/profile-picture';
import { ExperienceSection } from '@/components/table/experience-section';
import { TableStack } from '@/components/table/table-stack';
import { TableStackItem } from '@/components/table/table-stack-item';
import { Badge } from '@/components/ui/badge';
import { elevatorPitch, experiences, name, role, topSkills } from '@/experience';
import { LundUniversityExperience } from '@/experience/experiences/LundUniversityExperience';
import { languages } from '@/language/languages';
import { socialMediaLinks } from '@/link/socialMediaLinks';
import { skillConfig } from '@/skill/skillConfig';
import Link from 'next/link';
import React from 'react';

const Pdf = () => (
  <div className="text-zinc-800 dark:text-zinc-300 fill-zinc-800 dark:fill-zinc-300">
    <TableStack gap={1} className="mx-auto">
      <TableStackItem>
        <TableStack direction="row" alignItems="center">
          <TableStackItem>
            <p className="text-lg">{name}</p>
            <p className="text-sm text-pink-500 pb-2">{role}</p>
            <p className="text-xs">{elevatorPitch}</p>
          </TableStackItem>
          <TableStackItem className="float-right w-48">
            <ProfilePicture size={30} />
          </TableStackItem>
        </TableStack>
      </TableStackItem>
      <TableStackItem>
        <TableStack direction="row" gap={2} className="mx-auto">
          {socialMediaLinks.map(({ label, icon, href }, index) => (
            <TableStackItem key={index}>
              <Link href={href ?? ''} color="inherit" target="_blank" className="hover:underline">
                <TableStack direction="row" alignItems="center" className="w-px whitespace-nowrap">
                  <TableStackItem className="fill-zinc-800 dark:fill-zinc-300">
                    {icon}
                  </TableStackItem>
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
          <TableStackItem className="align-text-top w-48">
            <TableStack>
              <TableStackItem className="pb-1">
                <p className="text-2xl border-b pb-1 mb-1">Top Skills</p>
                {topSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="mb-1">
                    {React.cloneElement(skillConfig[skill].icon ?? <></>, {
                      className: 'text-2xl',
                    })}
                    {skillConfig[skill].label && (
                      <p className="text-xs">{skillConfig[skill].label}</p>
                    )}
                  </Badge>
                ))}
              </TableStackItem>
              <TableStackItem>
                <p className="text-2xl border-b pb-1 mb-1">Languages</p>
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
                <p className="text-2xl border-b pb-1 mb-1">Experiences</p>
                <TableStack>
                  {experiences.map((experience) => (
                    <TableStackItem key={experience.slug}>
                      <ExperienceSection experience={experience} />
                    </TableStackItem>
                  ))}
                </TableStack>
              </TableStackItem>
              <TableStackItem>
                <p className="text-2xl border-b pb-1 mb-1">Education</p>
                <ExperienceSection experience={LundUniversityExperience} />
              </TableStackItem>
            </TableStack>
          </TableStackItem>
        </TableStack>
      </TableStackItem>
    </TableStack>
  </div>
);

export default Pdf;
