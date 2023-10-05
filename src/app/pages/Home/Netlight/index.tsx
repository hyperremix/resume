import { ExperienceSection } from 'app/components/ExperienceSection';
import { NetlightIcon } from 'app/icons/NetlightIcon';
import * as React from 'react';
import { AgTechECommerce } from './AgTechECommerce';
import { Gambling } from './Gambling';
import { GlassesRetailer } from './GlassesRetailer';
import { IoTSuite } from './IoTSuite';
import { Mro } from './Mro';

export const Netlight = () => (
  <ExperienceSection title="Netlight" timePeriod="04.2016 - Present" icon={<NetlightIcon />}>
    <IoTSuite />
    <AgTechECommerce />
    <Gambling />
    <Mro />
    <GlassesRetailer />
  </ExperienceSection>
);
