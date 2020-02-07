import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Header } from './Header';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: false,
  screenshotWidths: [320],
  examples: [
    {
      Example: () => <Header />,
    },
  ],
};

export default docs;
