import { Avatar, Divider, Link, Typography, useTheme } from '@mui/material';
import { TableStack } from 'app/components/TableStack';
import { TableStackItem } from 'app/components/TableStack/TableStackItem';
import { experiencesState, getSortedSkills } from 'experiences';
import { Skill } from 'experiences/Skill';
import { LundUniversityExperience } from 'experiences/experiences/LundUniversityExperience';
import { Languages } from 'experiences/languages';
import { skillIcon } from 'experiences/skillIcon';
import { socialMediaLinks } from 'links/socialMediaLinks';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useThemeSlice } from 'theme/slice';
import { PdfExperienceSection } from './PdfExperienceSection';

export const Pdf = () => {
  const dispatch = useDispatch();
  const { actions } = useThemeSlice();
  const theme = useTheme();

  const [top10Skills, setTop10Skills] = useState<{ skill: Skill; months: number }[]>([]);

  useEffect(() => {
    setTop10Skills(getSortedSkills().slice(0, 14));
    dispatch(actions.setTypographySize('pdf'));
    dispatch(actions.setDarkMode(false));
  }, []);

  useEffect(
    () => () => {
      dispatch(actions.setTypographySize('regular'));
      dispatch(actions.setDarkMode(true));
    },
    [],
  );

  return (
    <>
      <TableStack gap={1}>
        <TableStackItem>
          <TableStack direction="row" alignItems="center">
            <TableStackItem>
              <Typography variant="h4">Fredrik Pettersson</Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: (theme) => theme.palette.secondary.main }}
              >
                Software Generalist
              </Typography>
              <Typography>
                A generalist at heart with skills both deep and wide within software development. At
                home in fast-paced environments with a focus on what is important. A mentor with a
                passion for personal growth. Enjoys sharing his experience and knowledge with
                others.
              </Typography>
            </TableStackItem>
            <TableStackItem>
              <Avatar
                sx={{ width: 60, height: 60 }}
                src="https://s.gravatar.com/avatar/e358a919f2a68d4dc95e586d76feaac6f3defb7104dabf9c303c76e077a91065?s=120"
              />
            </TableStackItem>
          </TableStack>
        </TableStackItem>
        <TableStackItem>
          <TableStack direction="row">
            {socialMediaLinks.map(({ label, icon, href }, index) => (
              <TableStackItem>
                <Link href={href} color="inherit" underline="hover" target="_blank">
                  <TableStack
                    direction="row"
                    alignItems="center"
                    gap={0.5}
                    sx={{ width: '1%', whiteSpace: 'nowrap' }}
                  >
                    <TableStackItem>{icon}</TableStackItem>
                    <TableStackItem>
                      <Typography>{label}</Typography>
                    </TableStackItem>
                  </TableStack>
                </Link>
              </TableStackItem>
            ))}
          </TableStack>
        </TableStackItem>
        <TableStackItem>
          <TableStack direction="row">
            <TableStackItem sx={{ width: '25%' }}>
              <TableStack>
                <TableStackItem sx={{ pb: 1 }}>
                  <Typography variant="h4">Top Skills</Typography>
                  <Divider sx={{ mb: 1 }} />
                  {top10Skills.map(({ skill }) => (
                    <Typography sx={{ mb: 1 }} key={skill}>
                      {skillIcon[skill]({ size: 'small' })}
                    </Typography>
                  ))}
                </TableStackItem>
                <TableStackItem>
                  <Typography variant="h4">Languages</Typography>
                  <Divider sx={{ mb: 1 }} />
                  <TableStack>
                    {Languages.map(({ name, level }) => (
                      <TableStackItem key={name}>
                        <TableStack sx={{ mb: 1 }}>
                          <TableStackItem>
                            <Typography variant="h6">{name}</Typography>
                          </TableStackItem>
                          <TableStackItem>
                            <Typography sx={{ color: theme.palette.secondary.main }}>
                              {level}
                            </Typography>
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
                  <Typography variant="h4">Experiences</Typography>
                  <Divider />
                  <TableStack>
                    {experiencesState.experiences.map((experience) => (
                      <TableStackItem>
                        <PdfExperienceSection experience={experience} />
                      </TableStackItem>
                    ))}
                  </TableStack>
                </TableStackItem>
                <TableStackItem>
                  <Typography variant="h4">Education</Typography>
                  <Divider />
                  <PdfExperienceSection experience={LundUniversityExperience} />
                </TableStackItem>
              </TableStack>
            </TableStackItem>
          </TableStack>
        </TableStackItem>
      </TableStack>
    </>
  );
};
