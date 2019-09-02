import React, { ReactElement, createContext, useMemo } from 'react';
import { FieldGroup, FieldGroupProps } from '../private/FieldGroup/FieldGroup';
import { RadioProps } from '../Radio/Radio';

interface RadioListProps extends FieldGroupProps {
  children: Array<ReactElement<RadioProps>> | ReactElement<RadioProps>;
  name: NonNullable<RadioProps['name']>;
}
interface RadioListContext {
  disabled?: RadioListProps['disabled'];
  name?: RadioListProps['name'];
}

const defaultRadioListProps: RadioListContext = {};
export const RadioListContext = createContext<RadioListContext>(
  defaultRadioListProps,
);

export const RadioList = ({
  id,
  label,
  tone,
  disabled,
  name,
  children,
  ...restProps
}: RadioListProps) => (
  <FieldGroup
    id={id}
    label={label}
    tone={tone}
    disabled={disabled}
    {...restProps}
  >
    {fieldGroupProps => {
      const radioListContextValue = useMemo(
        () => ({ ...fieldGroupProps, name }),
        [disabled, id, name],
      );

      return (
        <RadioListContext.Provider value={radioListContextValue}>
          {children}
        </RadioListContext.Provider>
      );
    }}
  </FieldGroup>
);
