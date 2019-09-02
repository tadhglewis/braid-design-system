import React, { useState, ChangeEvent } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { RadioList } from './RadioList';
import { Radio, RadioProps } from '../Radio/Radio';

const items: Array<Pick<RadioProps, 'id' | 'value' | 'label'>> = [
  { id: '1', value: '1', label: 'Option 1' },
  { id: '2', value: '2', label: 'Option 2' },
  { id: '3', value: '3', label: 'Option 3' },
];

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Standard',
      render: ({ id: docId }) => {
        const [value, setValue] = useState();

        return (
          <RadioList label="Label" id="standard" name={`${docId}_standard`}>
            {items.map(({ id, ...item }) => (
              <Radio
                {...item}
                key={`${docId}_standard_${id}`}
                id={`${docId}_standard_${id}`}
                checked={item.value === value}
                onChange={(e: ChangeEvent<HTMLFormElement>) => {
                  setValue(e.target.value);
                }}
              />
            ))}
          </RadioList>
        );
      },
    },
    {
      label: 'Checked item',
      render: ({ id: docId, handler }) => {
        const [value] = useState('2');

        return (
          <RadioList label="Label" id="checked" name={`${docId}_checked`}>
            {items.map(({ id, label, ...item }) => (
              <Radio
                {...item}
                key={`${docId}_checked_${id}`}
                id={`${docId}_checked_${id}`}
                label={`${label}${item.value === value ? ' (Checked)' : ''}`}
                checked={item.value === value}
                onChange={handler}
              />
            ))}
          </RadioList>
        );
      },
    },
    {
      label: 'Disabled list',
      render: ({ id: docId, handler }) => {
        const [value] = useState();

        return (
          <RadioList
            disabled
            label="Label"
            id="disabled"
            name={`${docId}_disabled`}
          >
            {items.map(({ id, ...item }) => (
              <Radio
                {...item}
                key={`${docId}_disabled_${id}`}
                id={`${docId}_disabled_${id}`}
                checked={item.value === value}
                onChange={handler}
              />
            ))}
          </RadioList>
        );
      },
    },
    {
      label: 'Critical list',
      render: ({ id: docId, handler }) => {
        const [value] = useState();

        return (
          <RadioList
            tone="critical"
            message="Required field"
            label="Label"
            id="disabled"
            name={`${docId}_disabled`}
          >
            {items.map(({ id, ...item }) => (
              <Radio
                {...item}
                key={`${docId}_disabled_${id}`}
                id={`${docId}_disabled_${id}`}
                checked={item.value === value}
                onChange={handler}
              />
            ))}
          </RadioList>
        );
      },
    },
  ],
};

export default docs;
