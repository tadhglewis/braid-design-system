import React from 'react';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import { Actions } from './Actions';
import { Button } from '../Button/Button';
import { TextLink } from '../TextLink/TextLink';

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  examples: [
    {
      label: 'Actions with Strong Button and TextLink',
      Example: () => (
        <Actions>
          <Button weight="strong">Submit</Button>
          <TextLink href="#">Cancel</TextLink>
        </Actions>
      ),
    },
    {
      label: 'Actions with Regular Button and Weak Button',
      Example: () => (
        <Actions>
          <Button weight="regular">Regular</Button>
          <Button weight="weak">Weak</Button>
        </Actions>
      ),
    },
    {
      label: 'Actions with Weak Buttons and Regular Button',
      Example: () => (
        <Actions>
          <Button weight="weak">Weak</Button>
          <Button weight="weak">Weak</Button>
          <Button weight="regular">Regular</Button>
        </Actions>
      ),
    },
  ],
  patterns: [
    {
      name: 'Standard Button, Text Link',
      code: dedent`
        <Actions>
          <Button>Submit</Button>
          <TextLink href="#">Cancel</TextLink>
        </Actions>
      `,
    },
    {
      name: 'Strong Button, Text Link',
      code: dedent`
        <Actions>
          <Button weight="strong">Submit</Button>
          <TextLink href="#">Cancel</TextLink>
        </Actions>
      `,
    },
    {
      name: 'Weak Button, Text Link',
      code: dedent`
        <Actions>
          <Button weight="weak">Submit</Button>
          <TextLink href="#">Cancel</TextLink>
        </Actions>
      `,
    },
  ],
};

export default docs;
