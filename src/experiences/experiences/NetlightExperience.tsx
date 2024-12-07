import { NetlightIcon } from 'app/icons/NetlightIcon';
import { Skill } from 'experiences/Skill';
import * as React from 'react';
import { TExperience } from '../TExperience';
import { AgTechECommerceExperience } from './AgTechECommerceExperience';
import { GamblingExperience } from './GamblingExperience';
import { GlassesRetailerExperience } from './GlassesRetailerExperience';
import { IotSuiteExperience } from './IotSuiteExperience';
import { MroExperience } from './MroExperience';
import { RideSharingExperience } from './RideSharingExperience';

export const NetlightExperience: TExperience = {
  slug: 'netlight',
  title: 'Netlight',
  from: new Date('2016-04-01'),
  icon: <NetlightIcon />,
  roles: [{ title: 'Consultant / Manager' }],
  companyDescription:
    'Netlight is a consultancy company with a strong focus on culture and leadership. They are working with some of the largest companies in Europe, helping them with their digital transformation.',
  projectDescription:
    'Genuine consultant for clients, mentor to fellow colleagues and driver of digital transformation regardless of tech stack, team setup or company size.',
  subExperiences: [
    RideSharingExperience,
    IotSuiteExperience,
    AgTechECommerceExperience,
    GamblingExperience,
    MroExperience,
    GlassesRetailerExperience,
  ],
  skills: [Skill.CoachingAndMentoring, Skill.Hiring],
};
