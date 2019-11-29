import React from 'react';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import { Columns } from './Columns';
import { Column } from '../Column/Column';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { HideCode } from '../private/HideCode';

const Content = ({ children = 'Column' }) => (
  <Box background="selection" padding="small">
    <Text baseline={false}>{children}</Text>
  </Box>
);

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
  patterns: [
    {
      name: '2 Columns',
      code: dedent`
        <Columns space="gutter">
          <Column>
            <Stack space="small">
              <Text>Column</Text>
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Text>Column</Text>
            </Stack>
          </Column>
        </Columns>
      `,
    },
    {
      name: '2 Columns (Collapse Below Tablet)',
      code: dedent`
        <Columns space="gutter" collapseBelow="tablet">
          <Column>
            <Stack space="small">
              <Text>Column</Text>
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Text>Column</Text>
            </Stack>
          </Column>
        </Columns>
      `,
    },
    {
      name: '3 Columns',
      code: dedent`
        <Columns space="gutter">
          <Column>
            <Stack space="small">
              <Text>Column</Text>
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Text>Column</Text>
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Text>Column</Text>
            </Stack>
          </Column>
        </Columns>
      `,
    },
    {
      name: '3 Columns (Collapse Below Tablet)',
      code: dedent`
        <Columns space="gutter" collapseBelow="tablet">
          <Column>
            <Stack space="small">
              <Text>Column</Text>
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Text>Column</Text>
            </Stack>
          </Column>
          <Column>
            <Stack space="small">
              <Text>Column</Text>
            </Stack>
          </Column>
        </Columns>
      `,
    },
    {
      name: 'Main Content With Sidebar',
      code: dedent`
        <Columns space="gutter" collapseBelow="tablet">
          <Column width="2/3">
            <Card>
              <Stack space="small">
                <Text>Main</Text>
              </Stack>
            </Card>
          </Column>
          <Column>
            <Card>
              <Stack space="small">
                <Text>Sidebar</Text>
              </Stack>
            </Card>
          </Column>
        </Columns>
      `,
    },
  ],
  examples: [
    {
      label: 'No space',
      Example: () => (
        <Columns space="none">
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Custom space, e.g. small',
      Example: () => (
        <Columns space="small">
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Responsive space, e.g. ["small", "large"]',
      Example: () => (
        <Columns space={['small', 'large']}>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Responsive space with `none` below tablet, e.g. ["none", "gutter"]',
      docsSite: false,
      Example: () => (
        <Columns space={['none', 'gutter']}>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Responsive space with `none` above mobile, e.g. ["small", "none"]',
      docsSite: false,
      Example: () => (
        <Columns space={['small', 'none']}>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Collapse below tablet',
      Example: () => (
        <Columns space="small" collapseBelow="tablet">
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Collapse below desktop',
      Example: () => (
        <Columns space="small" collapseBelow="desktop">
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Collapse below tablet with custom space, e.g. "small"',
      Example: () => (
        <Columns space="small" collapseBelow="tablet">
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Collapse below desktop with custom space, e.g. "small"',
      Example: () => (
        <Columns space="small" collapseBelow="desktop">
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below tablet with responsive space, e.g. ["small", "large"]',
      Example: () => (
        <Columns space={['small', 'large']} collapseBelow="tablet">
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below desktop with responsive space, e.g. ["small", "medium", "xlarge"]',
      Example: () => (
        <Columns space={['small', 'medium', 'xlarge']} collapseBelow="desktop">
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below tablet with responsive space and `none` below tablet, e.g. ["none", "gutter"]',
      docsSite: false,
      Example: () => (
        <Columns space={['none', 'gutter']} collapseBelow="tablet">
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below desktop with responsive space and `none` below desktop, e.g. ["none", "xsmall", gutter"]',
      docsSite: false,
      Example: () => (
        <Columns space={['none', 'xsmall', 'gutter']} collapseBelow="desktop">
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below tablet with responsive space and `none` above mobile, e.g. ["small", "none"]',
      docsSite: false,
      Example: () => (
        <Columns space={['small', 'none']} collapseBelow="tablet">
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label:
        'Collapse below desktop with responsive space and `none` above tablet, e.g. ["small", "medium, "none"]',
      docsSite: false,
      Example: () => (
        <Columns space={['small', 'medium', 'none']} collapseBelow="desktop">
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Reverse',
      Example: () => (
        <Columns space="small" reverse>
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
  ],
};

export default docs;
