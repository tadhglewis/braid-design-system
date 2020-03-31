import React from 'react';

import { Strong, Text } from '../';
import { ComponentDocs } from '../../../site/src/types';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      Example: () => (
        <Text>
          The last word of this sentence is <Strong>strong.</Strong>
        </Text>
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: <Strong>Strong text</Strong>,
    },
  ],
};

export default docs;
