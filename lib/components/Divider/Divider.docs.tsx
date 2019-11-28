import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Divider } from './Divider';

const docs: ComponentDocs = {
  category: 'Layout',
  patterns: [{ name: 'Standard', code: '<Divider />' }],
  examples: [
    {
      label: 'Standard Divider',
      Example: () => <Divider />,
    },
  ],
};

export default docs;
