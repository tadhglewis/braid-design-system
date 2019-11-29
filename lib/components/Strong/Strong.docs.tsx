import React from 'react';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import { Strong } from './Strong';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  examples: [
    {
      Example: () => (
        <Text>
          The last word of this sentence is <Strong>strong.</Strong>
        </Text>
      ),
    },
  ],
  patterns: [
    {
      name: 'Standard',
      code: dedent`
        <Strong>Strong text</Strong>
      `,
    },
  ],
};

export default docs;
