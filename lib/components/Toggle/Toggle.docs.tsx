import React from 'react';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import { Toggle } from './Toggle';

const handler = () => {
  /* no op for docs examples */
};

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  examples: [
    {
      label: 'Toggle off',
      Example: ({ id }) => (
        <Toggle on={false} label="Toggled off" id={id} onChange={handler} />
      ),
    },
    {
      label: 'Toggle on',
      Example: ({ id }) => (
        <Toggle on={true} label="Toggled on" id={id} onChange={handler} />
      ),
    },
    {
      label: 'Right aligned',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ id }) => (
        <Toggle
          on={true}
          align="right"
          label="Aligned right"
          id={id}
          onChange={handler}
        />
      ),
    },
  ],
  patterns: [
    {
      name: 'On',
      code: dedent`
        <Toggle
          id="id"
          label="Toggled on"
          on
        />
      `,
    },
    {
      name: 'Off',
      code: dedent`
        <Toggle
          id="id"
          label="Toggled off"
          on={false}
        />
      `,
    },
    {
      name: 'On, Aligned right',
      code: dedent`
        <Toggle
          id="id"
          label="Toggled on"
          align="right"
          on
        />
      `,
    },
    {
      name: 'Off, Aligned right',
      code: dedent`
        <Toggle
          id="id"
          label="Toggled off"
          align="right"
          on={false}
        />
      `,
    },
  ],
};

export default docs;
