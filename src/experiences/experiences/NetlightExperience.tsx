import { NetlightIcon } from 'app/icons/NetlightIcon';
import * as React from 'react';
import { TExperience } from '../TExperience';
import { AgTechECommerceExperience } from './AgTechECommerceExperience';
import { GamblingExperience } from './GamblingExperience';
import { GlassesRetailerExperience } from './GlassesRetailerExperience';
import { IotSuiteExperience } from './IotSuiteExperience';
import { MroExperience } from './MroExperience';

export const NetlightExperience: TExperience = {
  title: 'Netlight',
  from: new Date('2016-04-01'),
  icon: <NetlightIcon />,
  subExperiences: [
    IotSuiteExperience,
    AgTechECommerceExperience,
    GamblingExperience,
    MroExperience,
    GlassesRetailerExperience,
  ],
};
