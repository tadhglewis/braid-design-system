import React from 'react';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import { Secondary } from './Secondary';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  examples: [
    {
      Example: () => (
        <Text>
          The word in the <Secondary>middle</Secondary> is secondary text.
        </Text>
      ),
    },
  ],
};

export default docs;
