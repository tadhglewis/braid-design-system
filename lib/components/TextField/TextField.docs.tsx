import React, { useState, ReactNode } from 'react';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import { TextField } from './TextField';
import { TextLink } from '../TextLink/TextLink';
import { Box } from '../Box/Box';
import { IconSearch } from '../icons';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  examples: [
    {
      label: 'TextField',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Job Title"
          id={id}
          onChange={handler}
          value="Senior Developer"
        />
      ),
    },
    {
      docsSite: false,
      label: 'TextField with default padding',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Job Title"
          id={id}
          onChange={handler}
          value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
      ),
    },
    {
      label: 'TextField with clear button',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('Clear me');

        return (
          <TextField
            label="Job Title"
            id={id}
            onChange={e => setValue(e.currentTarget.value)}
            onClear={() => setValue('')}
            value={value}
          />
        );
      },
    },
    {
      label: 'TextField with icon',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('');

        return (
          <TextField
            label="Job Title"
            id={id}
            icon={<IconSearch />}
            placeholder="Enter a job title"
            onChange={e => setValue(e.currentTarget.value)}
            value={value}
          />
        );
      },
    },
    {
      docsSite: false,
      label: 'TextField with clear button padding',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Job Title"
          id={id}
          onChange={handler}
          onClear={handler}
          value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
      ),
    },
    {
      label: 'TextField with message',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Job Title"
          id={id}
          value=""
          message="e.g. Senior Developer"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with secondary label',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Title"
          secondaryLabel="Optional"
          id={id}
          value=""
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with tertiary label',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Title"
          secondaryLabel="Optional"
          tertiaryLabel={<TextLink>Help?</TextLink>}
          id={id}
          value=""
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with error',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Do you like Braid?"
          tone="critical"
          id={id}
          value="No"
          message="Answer is incorrect"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with postive message',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Do you like Braid?"
          id={id}
          value="Yes"
          message="Nice one!"
          tone="positive"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField on Brand Background',
      Container,
      Example: ({ id, handler }) => (
        <Box background="brand" padding="small">
          <TextField
            label="Job Title"
            id={id}
            onChange={handler}
            value="Senior Developer"
            reserveMessageSpace={false}
          />
        </Box>
      ),
    },
  ],
  patterns: [
    {
      name: 'Standard',
      code: dedent`
        <TextField
          id="id"
          label="Job Title"
          value="Senior Developer"
        />
      `,
    },
    {
      name: 'Clear button',
      code: dedent`
        <TextField
          id="id"
          label="Job Title"
          value="Senior Developer"
          onClear={() => {}}
        />
      `,
    },
    {
      name: 'Icon',
      code: dedent`
        <TextField
          icon={<IconSearch/>}
          id="id"
          placeholder="Enter a job title"
          value=""
        />
      `,
    },
    {
      name: 'Message',
      code: dedent`
        <TextField
          id="id"
          label="Job Title"
          message="e.g. Senior Developer"
        />
      `,
    },
    {
      name: 'Secondary label',
      code: dedent`
        <TextField
          id="id"
          label="Title"
          secondaryLabel="Optional"
          value=""
        />
      `,
    },
    {
      name: 'Tertiary label',
      code: dedent`
        <TextField
          id="id"
          label="Title"
          secondaryLabel="Optional"
          tertiaryLabel={<TextLink>Help?</TextLink>}
          value=""
        />
      `,
    },
    {
      name: 'Error message',
      code: dedent`
        <TextField
          id="id"
          label="Do you like Braid?"
          message="Answer is incorrect"
          tone="critical"
          value="No"
        />
      `,
    },
    {
      name: 'Positive message',
      code: dedent`
        <TextField
          id="id"
          label="Do you like Braid?"
          message="Nice one!"
          tone="positive"
          value="Yes"
        />
      `,
    },
  ],
};

export default docs;
