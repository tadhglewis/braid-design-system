import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import React, { useState } from 'react';

import { Text, TextDropdown } from '..';
import { BraidTestProvider } from '../../../entries/test';

describe('TextDropdown', () => {
  it('should support controlled state', () => {
    const TestCase = () => {
      const [value, setValue] = useState('Two');

      return (
        <BraidTestProvider>
          <Text>
            <TextDropdown
              id="content"
              label="Label"
              value={value}
              onChange={setValue}
              options={['One', 'Two', 'Third']}
            />
          </Text>
        </BraidTestProvider>
      );
    };

    const { getByRole } = render(<TestCase />);
    const dropdown = getByRole('combobox') as HTMLSelectElement;

    expect(dropdown.options[dropdown.selectedIndex].value).toEqual('Two');
    fireEvent.change(dropdown, { target: { selectedIndex: 2 } });
    expect(dropdown.options[dropdown.selectedIndex].value).toEqual('Third');
  });
});
