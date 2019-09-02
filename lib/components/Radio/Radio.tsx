import React, { forwardRef, useContext } from 'react';
import { Omit } from 'utility-types';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';
import { RadioListContext } from '../RadioList/RadioList';

export interface RadioProps
  extends Omit<InlineFieldProps, 'message' | 'reserveMessageSpace'> {}

const NamedRadio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const radioListContextProps = useContext(RadioListContext);

  return (
    <InlineField
      {...props}
      {...radioListContextProps}
      type="radio"
      message={null}
      reserveMessageSpace={false}
      ref={ref}
    />
  );
});

NamedRadio.displayName = 'Radio';

export const Radio = NamedRadio;
