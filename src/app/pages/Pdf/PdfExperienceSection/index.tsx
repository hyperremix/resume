import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Box, Typography } from '@mui/material';
import { ExperienceChip } from 'app/components/ExperienceChip';
import { TableStack } from 'app/components/TableStack';
import { TableStackItem } from 'app/components/TableStack/TableStackItem';
import { TimePeriod } from 'app/components/TimePeriod';
import { TExperience } from 'experiences/TExperience';
import * as React from 'react';

type Props = {
  experience: TExperience;
};

export const PdfExperienceSection = ({
  experience: { title, from, to, icon, roles, location, subExperiences, ...description },
}: Props) => {
  return (
    <TableStack>
      <TableStackItem>
        <TableStack sx={{ mt: 1 }}>
          <TableStackItem>
            <TableStack direction="row" alignItems="center" gap={0.5}>
              <TableStackItem sx={{ width: '1%' }}>
                {icon ? icon : <CircleOutlinedIcon />}
              </TableStackItem>
              <TableStackItem>
                <Typography variant="h6">{title}</Typography>
              </TableStackItem>
            </TableStack>
          </TableStackItem>
          <TableStackItem>
            <Typography>{roles?.map((role) => role.title).join(' | ')}</Typography>
          </TableStackItem>
          <TableStackItem>
            <Typography>{location}</Typography>
          </TableStackItem>
          <TableStackItem>
            <TimePeriod from={from} to={to} />
          </TableStackItem>
        </TableStack>
      </TableStackItem>
      <TableStackItem>
        {(description.companyDescription ||
          description.projectDescription ||
          description.skills) && <ExperienceDescription roles={roles} {...description} />}
      </TableStackItem>
      <TableStackItem>
        {subExperiences && (
          <TableStack>
            {subExperiences.map((subExperience) => (
              <TableStackItem
                key={subExperience.title}
                sx={{
                  pl: 2,
                  borderLeftWidth: '1px',
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                }}
              >
                <PdfExperienceSection experience={subExperience} />
              </TableStackItem>
            ))}
          </TableStack>
        )}
      </TableStackItem>
    </TableStack>
  );
};

const ExperienceDescription = ({
  companyDescription,
  projectDescription,
  skills,
  roles,
}: Pick<TExperience, 'companyDescription' | 'projectDescription' | 'skills' | 'roles'>) => (
  <TableStack gap={0.75}>
    {companyDescription && (
      <TableStackItem>
        <Typography>{companyDescription}</Typography>
      </TableStackItem>
    )}
    {projectDescription && (
      <TableStackItem>
        <Typography variant="h6">Project</Typography>
        <Typography>{projectDescription}</Typography>
      </TableStackItem>
    )}
    {roles && (
      <TableStack>
        <TableStackItem>
          <Typography variant="h6">Roles</Typography>
        </TableStackItem>
        <TableStackItem>
          {roles.map((role) => (
            <TableStackItem key={role.title}>
              <Typography variant="h6">{role.title}</Typography>
              {role.description &&
                role.description.map((description) => (
                  <Typography key={description}>{description}</Typography>
                ))}
            </TableStackItem>
          ))}
        </TableStackItem>
      </TableStack>
    )}
    {skills && (
      <TableStackItem>
        <Typography variant="h6">Skills</Typography>
        {skills.map((skill, index) => (
          <Box key={skill} display="inline-block" ml={index === 0 ? 0 : 0.5} mb={1} fontSize="10px">
            <ExperienceChip skill={skill} />
          </Box>
        ))}
      </TableStackItem>
    )}
  </TableStack>
);
