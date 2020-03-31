import React from 'react';

import { ComponentDocs } from '../../../site/src/types';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';

import { useThemeName } from './useThemeName';

const docs: ComponentDocs = {
  category: 'Logic',
  screenshotWidths: [],
  examples: [
    {
      playroom: false,
      Example: () => {
        const themeName = useThemeName();

        return (
          <Text>
            The active theme is <Strong>{themeName}</Strong>.
          </Text>
        );
      },
      code: `
        const themeName = useThemeName();

        return (
          <Text>
            The active theme is <Strong>{themeName}</Strong>.
          </Text>
        );
      `,
    },
  ],
};

export default docs;
