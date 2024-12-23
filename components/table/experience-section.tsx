import { TimePeriod } from '@/components/custom/time-period';
import { Badge } from '@/components/ui/badge';
import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import { skillConfig } from '@/skill/skillConfig';
import { useTranslations } from 'next-intl';
import { TableStack } from './table-stack';
import { TableStackItem } from './table-stack-item';

type Props = {
  experience: TExperience;
};

export const ExperienceSection = ({
  experience: { title, from, to, icon, roles, location, subExperiences, ...description },
}: Props) => {
  const t = useTranslations();

  return (
    <TableStack>
      <TableStackItem>
        <TableStack className="mt-1">
          <TableStackItem>
            <TableStack direction="row" alignItems="center" gap={2}>
              <TableStackItem className="w-px text-lg">{icon}</TableStackItem>
              <TableStackItem>
                <p className="text-xl">{t(title)}</p>
              </TableStackItem>
            </TableStack>
          </TableStackItem>
          <TableStackItem>
            <p className="text-lg">{roles?.map((role) => t(role.title)).join(' | ')}</p>
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
}: Pick<TExperience, 'companyDescription' | 'projectDescription' | 'skills' | 'roles'>) => {
  const t = useTranslations();

  return (
    <TableStack gap={1}>
      {companyDescription && (
        <TableStackItem>
          <p className="text-xs">{t(companyDescription)}</p>
        </TableStackItem>
      )}
      {projectDescription && (
        <TableStackItem>
          <p className="text-lg">{t(translations.projectHeader)}</p>
          <p className="text-xs">{t(projectDescription)}</p>
        </TableStackItem>
      )}
      {roles && (
        <TableStackItem>
          <TableStack>
            <TableStackItem>
              <p className="text-lg">{t(translations.rolesHeader)}</p>
            </TableStackItem>
            <TableStackItem>
              <TableStack>
                {roles.map((role, i) => (
                  <TableStackItem key={i}>
                    <p className="text-sm">{t(role.title)}</p>
                    {role.description &&
                      role.description.map((description, i) => (
                        <p className="text-xs" key={i}>
                          {t(description)}
                        </p>
                      ))}
                  </TableStackItem>
                ))}
              </TableStack>
            </TableStackItem>
          </TableStack>
        </TableStackItem>
      )}
      {skills && (
        <TableStackItem>
          <p className="text-lg">{t(translations.skillsHeader)}</p>
          {skills.map((skill, index) => (
            <div key={skill} className={`inline-block mb-1 ${index === 0 ? '' : 'ml-1'}`}>
              <Badge key={skill} variant="outline">
                {skillConfig[skill].icon ? (
                  <div>{skillConfig[skill].icon}</div>
                ) : (
                  <div style={{ height: '1em' }} />
                )}
                {skillConfig[skill].label && <p className="text-xs">{skillConfig[skill].label}</p>}
              </Badge>
            </div>
          ))}
        </TableStackItem>
      )}
    </TableStack>
  );
};
