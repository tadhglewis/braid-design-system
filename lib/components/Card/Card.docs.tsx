import React from 'react';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import { Card } from './Card';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
  examples: [
    {
      label: 'Default',
      Container: ({ children }) => (
        <Box padding="gutter" style={{ backgroundColor: '#ccc' }}>
          {children}
        </Box>
      ),
      Example: () => (
        <Card>
          <Text>This text is inside a card.</Text>
        </Card>
      ),
    },
  ],
  patterns: [
    {
      name: 'Standard',
      code: dedent`
        <Card>
          <Text>Card</Text>
        </Card>
      `,
    },
  ],
};

export default docs;
