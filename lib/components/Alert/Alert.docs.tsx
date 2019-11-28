import React from 'react';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import { Alert } from './Alert';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  examples: [
    {
      label: 'Info Alert',
      Example: () => (
        <Alert tone="info">This is an important piece of information.</Alert>
      ),
    },
    {
      label: 'Strong Info Alert',
      Example: () => (
        <Alert weight="strong" tone="info">
          This is an important piece of information.
        </Alert>
      ),
    },
    {
      label: 'Promote Alert',
      Example: () => (
        <Alert tone="promote">This is a promoted piece of information.</Alert>
      ),
    },
    {
      label: 'Strong Promote Alert',
      Example: () => (
        <Alert weight="strong" tone="promote">
          This is a promoted piece of information.
        </Alert>
      ),
    },
    {
      label: 'Critical Alert',
      Example: () => (
        <Alert tone="critical">This is a critical piece of information.</Alert>
      ),
    },
    {
      label: 'Strong Critical Alert',
      Example: () => (
        <Alert weight="strong" tone="critical">
          This is a critical piece of information.
        </Alert>
      ),
    },
    {
      label: 'Positive Alert',
      Example: () => (
        <Alert tone="positive">This is a positive piece of information.</Alert>
      ),
    },
    {
      label: 'Strong Positive Alert',
      Example: () => (
        <Alert weight="strong" tone="positive">
          This is a positive piece of information.
        </Alert>
      ),
    },
  ],
  patterns: [
    {
      name: 'Critical',
      code: dedent`
        <Alert tone="critical">Alert</Alert>
      `,
    },
    {
      name: 'Critical (Strong)',
      code: dedent`
        <Alert tone="critical" weight="strong">Alert</Alert>
      `,
    },
    {
      name: 'Positive',
      code: dedent`
        <Alert tone="positive">Alert</Alert>
      `,
    },
    {
      name: 'Positive (Strong)',
      code: dedent`
        <Alert tone="positive" weight="strong">Alert</Alert>
      `,
    },
    {
      name: 'Info',
      code: dedent`
        <Alert tone="info">Alert</Alert>
      `,
    },
    {
      name: 'Info (Strong)',
      code: dedent`
        <Alert tone="info" weight="strong">Alert</Alert>
      `,
    },
    {
      name: 'Promote',
      code: dedent`
        <Alert tone="promote">Alert</Alert>
      `,
    },
    {
      name: 'Promote (Strong)',
      code: dedent`
        <Alert tone="promote" weight="strong">Alert</Alert>
      `,
    },
  ],
};

export default docs;
