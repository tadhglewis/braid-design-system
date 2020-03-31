import React from 'react';

import { Secondary, Text } from '../';
import { ComponentDocs } from '../../../site/src/types';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      Example: () => (
        <Text>
          The word in the <Secondary>middle</Secondary> is secondary text.
        </Text>
      ),
    },
  ],
  snippets: [{ name: 'Standard', code: <Secondary>Secondary</Secondary> }],
};

export default docs;
