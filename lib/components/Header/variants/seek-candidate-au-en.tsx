import React from 'react';
import { HeaderVariant } from '../HeaderVariant';
import { SeekLogo } from './logos/SeekLogo';

const seekCandidateAuEnHeaderVariant: HeaderVariant = {
  logo: <SeekLogo />,
  strings: {
    Menu: 'Menu',
  },
  tabs: [
    {
      id: 'job_search',
      href: '#',
      text: 'Job Search',
    },
    {
      id: 'profile',
      href: '#',
      text: 'Profile',
    },
    {
      id: 'career_advice',
      href: '#',
      text: 'Career Advice',
    },
    {
      id: 'company_reviews',
      href: '#',
      text: 'Company Reviews',
    },
  ],
  callToAction: {
    href: '#',
    text: 'Employer site',
  },
  secondaryActions: [
    { href: '#', text: 'Sign in' },
    { href: '#', text: 'Register' },
  ],
  authenticatedLinks: [
    { href: '#', text: 'Profile' },
    { href: '#', text: 'Saved Searches' },
    { href: '#', text: 'Saved Jobs' },
    { href: '#', text: 'Applied Jobs' },
  ],
};

export default seekCandidateAuEnHeaderVariant;
