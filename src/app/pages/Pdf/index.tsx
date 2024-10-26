import { Chip, Divider, Link, Typography, useTheme } from '@mui/material';
import { ProfilePicture } from 'app/components/ProfilePicture';
import { TableStack } from 'app/components/TableStack';
import { TableStackItem } from 'app/components/TableStack/TableStackItem';
import { experiencesState, getSortedSkills } from 'experiences';
import { Skill } from 'experiences/Skill';
import { LundUniversityExperience } from 'experiences/experiences/LundUniversityExperience';
import { skillIcon } from 'experiences/skillIcon';
import { languages } from 'languages/languages';
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
              <ProfilePicture size={120} />
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
                  {experiencesState.topSkills.map((skill) => (
                    <Typography sx={{ mb: 1 }} key={skill}>
                      {(skillIcon[skill] as any).type === Typography ? (
                        <Chip sx={{ pl: 1 }} label={skill} variant="outlined" size="small" />
                      ) : (
                        <Chip
                          sx={{ pl: 1 }}
                          icon={skillIcon[skill]}
                          label={skill}
                          variant="outlined"
                          size="small"
                        />
                      )}
                    </Typography>
                  ))}
                </TableStackItem>
                <TableStackItem>
                  <Typography variant="h4">Languages</Typography>
                  <Divider sx={{ mb: 1 }} />
                  <TableStack>
                    {Object.entries(languages).map(([key, { icon, name, level }]) => (
                      <TableStackItem key={key}>
                        <TableStack sx={{ mb: 1 }}>
                          <TableStackItem>
                            <TableStack direction="row" alignItems="center" gap={1}>
                              <TableStackItem sx={{ width: '1px' }}>{icon}</TableStackItem>
                              <TableStackItem>
                                <Typography variant="h6">{name}</Typography>
                              </TableStackItem>
                            </TableStack>
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
