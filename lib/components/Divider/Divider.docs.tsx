import React from 'react';

import { Divider } from '../';
import { ComponentDocs } from '../../../site/src/types';

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard Divider',
      Example: () => <Divider />,
    },
  ],
  snippets: [{ name: 'Standard', code: <Divider /> }],
};

export default docs;
