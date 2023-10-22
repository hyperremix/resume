import { ExperienceSection } from 'app/components/ExperienceSection';
import { Layout } from 'app/components/Layout';
import { ResumeSection } from 'app/components/ResumeSection';
import { TopSkills } from 'app/components/TopSkills';
import { experiencesState } from 'experiences';
import { LundUniversityExperience } from 'experiences/experiences/LundUniversityExperience';
import * as React from 'react';

export const Home = () => (
  <Layout maxWidth="md">
    <ResumeSection title="Top Skills">
      <TopSkills />
    </ResumeSection>
    <ResumeSection title="Experience">
      {Object.values(experiencesState.experiences).map((experience, index) => (
        <ExperienceSection key={index} experience={experience} />
      ))}
    </ResumeSection>
    <ResumeSection title="Education">
      <ExperienceSection experience={LundUniversityExperience} />
    </ResumeSection>
  </Layout>
);
