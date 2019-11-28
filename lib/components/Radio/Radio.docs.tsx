import React from 'react';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import { Radio } from './Radio';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  patterns: [
    { name: 'Standard', code: '<Radio checked={false} label="Radio" />' },
    { name: 'Checked', code: '<Radio checked={true} label="Radio" />' },
  ],
  examples: [
    {
      label: 'Standard Radio Button',
      Example: ({ id, handler }) => (
        <Radio id={id} checked={false} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Checked Radio Button',
      Example: ({ id, handler }) => (
        <Radio id={id} checked={true} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Disabled Radio Button',
      Example: ({ id, handler }) => (
        <Radio
          id={id}
          disabled={true}
          checked={false}
          onChange={handler}
          label="Label"
        />
      ),
    },
    {
      label: 'Critical Radio Button',
      Example: ({ id, handler }) => (
        <Radio
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          tone="critical"
        />
      ),
    },
    {
      label: 'Nested Radio Button',
      Example: ({ id, handler }) => (
        <Radio id={id} checked={true} onChange={handler} label="Label">
          <Text>This text is visible when the radio button is checked.</Text>
        </Radio>
      ),
    },
  ],
  patterns: [
    {
      name: 'Unchecked',
      code: dedent`
        <Radio
          checked={false}
          id="id"
          label="Label"
        />
      `,
    },
    {
      name: 'Checked',
      code: dedent`
        <Radio
          checked
          id="id"
          label="Label"
        />
      `,
    },
    {
      name: 'Disabled',
      code: dedent`
        <Radio
          disabled
          checked={false}
          id="id"
          label="Label"
        />
      `,
    },
    {
      name: 'Critical',
      code: dedent`
        <Radio
          checked={false}
          id="id"
          label="Label"
          tone="critical"
        />
      `,
    },
    {
      name: 'Nested',
      code: dedent`
        <Radio
          checked={true}
          id="id"
          label="Label"
        >
          <Text>
            This text is visible when the radio button is checked.
          </Text>
        </Radio>
      `,
    },
  ],
};

export default docs;
