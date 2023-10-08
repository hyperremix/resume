import VideocamIcon from '@mui/icons-material/Videocam';
import { Stack, Typography } from '@mui/material';
import { ExperienceSection } from 'app/components/ExperienceSection';
import * as React from 'react';
import { Skill } from 'types/Skill';
import { skillIcon } from 'types/skillIcon';

export const BrainwareGroup = () => (
  <ExperienceSection
    title="BrainwareGroup"
    titleVariant="h6"
    role="Developer"
    timePeriod="07/2014 - 03/2016"
    icon={<VideocamIcon />}
    companyDescription={
      <Typography>
        Brainwaregroup is an international company, with headquarters Switzerland, that provides IT
        service- and contract management solutions. Companies like Vodafone, OMV, Linde, Allianz GI
        and ERGO are all long-time customers of Brainwaregroups wide arrange of products.
      </Typography>
    }
    projectDescription={
      <Typography>Automatic software recognition for a IT-licence compliance product</Typography>
    }
    roleDescription={
      <Stack gap={1} alignItems="flex-start">
        <Typography>
          The company had a relatively small development team and was struggling to keep up with
          customer demands while still trying to innovate their products. Fredrik was hired to
          relieve some of this pressure by being part of mostly new projects but also helping with
          bug fixing and general development. The most significant projects where the implementation
          of a command-line tool GUI, the migration from SourceSafe to git and the Elasticsearch
          integration. The command-line tool GUI was initially Fredrik’s own idea, to help the
          development team with easy debugging of the numerous command-line tools. However, it
          didn’t take long before the true potential was seen and more and more features where
          implemented. The GUI is now used throughout the whole company.
        </Typography>
        <Typography>
          Since the company was created, the version control system that has been used is Visual
          SourceSafe. Because of the bad experiences with branching and merging in SourceSafe, they
          absolutely abandoned that workflow. This in turn made parallel work completely impossible,
          which sometimes choked the development for days. In order to solve this, Fredrik
          introduced the team to git and implemented a new workflow and branching model. It has been
          used with great appreciation and success to this day.
        </Typography>
        <Typography>
          All products that brainwaregroup provides have a way of searching for information. In some
          cases, the search queries where suffering from performance issues. In order to provide a
          better user experience, Fredrik was supposed to mirror the database in Elasticsearch. The
          searches where then sent to Elasticsearch instead of the database, which provided nearly
          instant search results.
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
    withStickyHeader
  />
);
