import AlbumIcon from '@mui/icons-material/Album';
import { Stack, Typography } from '@mui/material';
import { ExperienceSection } from 'app/components/ExperienceSection';
import * as React from 'react';
import { Skill } from 'types/Skill';
import { skillIcon } from 'types/skillIcon';

export const Cdon = () => (
  <ExperienceSection
    title="CDON"
    titleVariant="h6"
    role="Developer"
    timePeriod="06/2013 - 09/2013 | 06/2012 - 09/2012"
    icon={<AlbumIcon />}
    companyDescription={
      <Typography>
        CDON is one of the leading E-commerce companies in Scandinavia with over two million active
        customers. They sell movies, music, games, books and electronics among many other things.
      </Typography>
    }
    projectDescription={
      <Stack gap={1}>
        <Typography>Introduction of the subscription based membership CDON+</Typography>
        <Typography>.NET WebForms migration to .NET MVC</Typography>
      </Stack>
    }
    roleDescription={
      <Stack gap={1} alignItems="flex-start">
        <Typography>
          During the summer of 2013, Fredrik was part of the development team bringing the feature
          CDON+ to the website. CDON+ is a paid membership that gives customers free shipping on
          every purchase above SEK 100 and a way to collect points that are translated into a gift
          card at the end of a year. Fredrik was involved in all parts of the project, including
          planning, database design, business logic implementation as well as GUI design.
        </Typography>
        <Typography>
          During the summer of 2012, Fredrik was hired by CDON to help migrate their legacy code,
          which was written with .NET WebForms, to .NET MVC. More specifically, the project included
          the register page, edit user page, recover password page, etc. The assignment was an
          important step towards the modernization of the website. Also, as .NET MVC is highly
          testable, the new implementation offered better testability and maintainability of the
          code base.
        </Typography>
      </Stack>
    }
    skills={
      <Stack direction="row" gap={1} flexWrap="wrap">
        {skillIcon[Skill.CSharp]}
        {skillIcon[Skill.HTML]}
        {skillIcon[Skill.CSS]}
        {skillIcon[Skill.TypeScript]}
        {skillIcon[Skill.DotNetCore]}
        {skillIcon[Skill.SQLServer]}
      </Stack>
    }
  />
);
