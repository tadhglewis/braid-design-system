import React from 'react';
import { ComponentDocs, ComponentExample } from '../../../site/src/types';
import { Box } from './Box';
import { HideCode } from '../private/HideCode';
import tokens from '../../themes/wireframe/tokens';
import dedent from 'dedent';

type Space = keyof typeof tokens.space;
const spaceScale = Object.keys(tokens.space) as Space[];

const docs: ComponentDocs = {
  category: 'Layout',
  storybook: false,
  examples: spaceScale.map(
    (space): ComponentExample => ({
      label: `"${space}" space`,
      Container: ({ children }) => (
        <Box
          background="formAccent"
          style={{ overflow: 'auto', maxWidth: '300px' }}
        >
          {children}
        </Box>
      ),
      Example: () => (
        <Box margin={space}>
          <HideCode>
            <Box style={{ background: 'whitesmoke', height: '20px' }} />
          </HideCode>
        </Box>
      ),
    }),
  ),
  patterns: [
    {
      name: 'Branded container',
      code: dedent`
        <Box background="brand" padding="gutter">
          <Stack space="gutter">
            <Heading level="1">Title</Heading>
          </Stack>
        </Box>
      `,
    },
    {
      name: 'Horizontal scrolling container',
      code: dedent`
        <Box style={{ overflow: "auto" }}>
          <Inline space="gutter" wrap={false}>
            <Text>Content</Text>
          </Inline>
        </Box>
      `,
    },
  ],
};

export default docs;
