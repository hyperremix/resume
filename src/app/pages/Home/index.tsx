import { Layout } from 'app/components/Layout';
import { ResumeSection } from 'app/components/ResumeSection';
import * as React from 'react';
import { BrainwareGroup } from './BrainwareGroup';
import { Cdon } from './Cdon';
import { LundUniversity } from './LundUniversity';
import { Netlight } from './Netlight';

export const Home = () => (
  <Layout maxWidth="md">
    <ResumeSection title="Experience">
      <Netlight />
      <BrainwareGroup />
      <Cdon />
    </ResumeSection>
    <ResumeSection title="Education">
      <LundUniversity />
    </ResumeSection>
  </Layout>
);
