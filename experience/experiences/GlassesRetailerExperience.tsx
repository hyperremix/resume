import { TExperience } from '@/experience/TExperience';
import { translations } from '@/i18n';
import Glasses from '@/icons/common/glasses';
import { Skill } from '@/skill/Skill';

export const GlassesRetailerExperience: TExperience = {
  slug: 'glasses-retailer',
  title: translations.experience.title.glassesRetailer,
  from: '2016-04-01',
  to: '2018-07-01',
  icon: <Glasses />,
  companyDescription: translations.experience.companyDescription.glassesRetailer,
  projectDescription: translations.experience.projectDescription.glassesRetailer,
  roles: [
    {
      title: translations.experience.role.fullStackDeveloperAndArchitect,
      description: [
        translations.experience.roleDescription.glassesRetailer[0],
        translations.experience.roleDescription.glassesRetailer[1],
      ],
    },
  ],
  highlightedSkills: [
    Skill.CSharp,
    Skill.DotNetFramework,
    Skill.JavaScript,
    Skill.AngularJS,
    Skill.MongoDB,
  ],
  skills: [
    Skill.CSharp,
    Skill.JavaScript,
    Skill.AngularJS,
    Skill.CSS,
    Skill.HTML,
    Skill.DotNetFramework,
    Skill.MongoDB,
    Skill.Docker,
    Skill.TeamCity,
    Skill.Kibana,
    Skill.Scrum,
    Skill.UnitTesting,
    Skill.IntegrationTesting,
    Skill.E2ETesting,
  ],
};
