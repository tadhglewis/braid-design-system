import React from 'react';
import { Link } from 'react-router-dom';

import { ComponentDocs } from '../../../site/src/types';
import { Text } from '../Text/Text';

import { TextLinkRenderer } from './TextLinkRenderer';

const docs: ComponentDocs = {
  category: 'Interaction',
  screenshotWidths: [320],
  examples: [
    {
      label: 'TextLink with Custom Renderer',
      Example: () => (
        <Text>
          The last word of this sentence is a{' '}
          <TextLinkRenderer>
            {(textLinkProps) => (
              <Link to="" {...textLinkProps}>
                link.
              </Link>
            )}
          </TextLinkRenderer>
        </Text>
      ),
      code: `
        import React from 'react';
        import { Link } from 'react-router-dom';
        import { TextLinkRenderer, Text } from 'braid-design-system';

        export default () => (
          <Text>
            The last word of this sentence is a{' '}
            <TextLinkRenderer>
              {textLinkProps => (
                <Link to="" {...textLinkProps}>
                  link.
                </Link>
              )}
            </TextLinkRenderer>
          </Text>
        );
      `,
    },
  ],
};

export default docs;
