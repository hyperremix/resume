import { TExperience } from '@/experience/TExperience';
import { skillIcon } from '@/skill/skillIcon';
import { TimePeriod } from '../custom/time-period';
import { Badge } from '../ui/badge';
import { TableStack } from './table-stack';
import { TableStackItem } from './table-stack-item';

type Props = {
  experience: TExperience;
};

export const ExperienceSection = ({
  experience: { title, from, to, icon, roles, location, subExperiences, ...description },
}: Props) => {
  return (
    <TableStack>
      <TableStackItem>
        <TableStack className="mt-1">
          <TableStackItem>
            <TableStack direction="row" alignItems="center" gap={2}>
              <TableStackItem className="w-px text-lig">{icon}</TableStackItem>
              <TableStackItem>
                <p className="text-xl">{title}</p>
              </TableStackItem>
            </TableStack>
          </TableStackItem>
          <TableStackItem>
            <p className="text-lg">{roles?.map((role) => role.title).join(' | ')}</p>
          </TableStackItem>
          <TableStackItem>
            <p className="text-sm">{location}</p>
          </TableStackItem>
          <TableStackItem>
            <TimePeriod from={from} to={to} className="text-sm" />
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
              <TableStackItem key={subExperience.title}>
                <ExperienceSection experience={subExperience} />
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
        <p className="text-xs">{companyDescription}</p>
      </TableStackItem>
    )}
    {projectDescription && (
      <TableStackItem>
        <p className="text-lg">Project</p>
        <p className="text-xs">{projectDescription}</p>
      </TableStackItem>
    )}
    {roles && (
      <TableStack>
        <TableStackItem>
          <p className="text-lg">Roles</p>
        </TableStackItem>
        <TableStackItem>
          {roles.map((role) => (
            <TableStackItem key={role.title}>
              <p className="text-sm">{role.title}</p>
              {role.description &&
                role.description.map((description) => (
                  <p className="text-xs" key={description}>
                    {description}
                  </p>
                ))}
            </TableStackItem>
          ))}
        </TableStackItem>
      </TableStack>
    )}
    {skills && (
      <TableStackItem>
        <p className="text-lg">Skills</p>
        {skills.map((skill, index) => (
          <div key={skill} className={`inline-block mb-1 ${index === 0 ? '' : 'ml-0.5'}`}>
            <Badge key={skill} variant="outline">
              {skillIcon[skill] ? <div>{skillIcon[skill]}</div> : <div style={{ height: '1em' }} />}
              <p className="text-xs">{skill}</p>
            </Badge>
          </div>
        ))}
      </TableStackItem>
    )}
  </TableStack>
);
