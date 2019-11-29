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
      name: 'With Heading',
      code: dedent`
        <Card>
          <Stack space="gutter">
            <Heading level="3">Heading</Heading>
            <Text>Text</Text>
          </Stack>
        </Card>
      `,
    },
    {
      name: 'With Overflow Menu',
      code: dedent`
        <Card>
          <Columns>
            <Column>
              <Stack space="gutter">
                <Heading level="3">Heading</Heading>
                <Text>Text</Text>
              </Stack>
            </Column>
            <Column width="content">
              <OverflowMenu label="Options">
                <OverflowMenuItem>Menu Item</OverflowMenuItem>
                <OverflowMenuItem>Menu Item</OverflowMenuItem>
              </OverflowMenu>
            </Column>
          </Columns>
        </Card>
      `,
    },
  ],
};

export default docs;
