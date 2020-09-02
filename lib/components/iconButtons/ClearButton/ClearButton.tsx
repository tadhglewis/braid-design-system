import React, { forwardRef } from 'react';
import { IconButton, IconButtonProps } from '../IconButton';
import { IconClear } from '../..';
import { UseIconSizeProps } from '../../../hooks/useIcon';

export type ClearButtonProps = Pick<
  IconButtonProps,
  | 'onClick'
  | 'onMouseDown'
  | 'onKeyUp'
  | 'onKeyDown'
  | 'label'
  | 'keyboardAccessible'
  | 'active'
  | 'aria-haspopup'
  | 'aria-expanded'
  | 'tone'
  | 'data'
> &
  UseIconSizeProps;

export const ClearButton = forwardRef<HTMLButtonElement, ClearButtonProps>(
  (
    {
      label,
      onClick,
      onKeyUp,
      onKeyDown,
      onMouseDown,
      keyboardAccessible,
      active,
      'aria-haspopup': ariaHasPopUp,
      'aria-expanded': ariaExpanded,
      tone,
      data,
      ...props
    },
    forwardedRef,
  ) => (
    <IconButton
      label={label}
      onClick={onClick}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onMouseDown={onMouseDown}
      keyboardAccessible={keyboardAccessible}
      active={active}
      aria-haspopup={ariaHasPopUp}
      aria-expanded={ariaExpanded}
      tone={tone}
      ref={forwardedRef}
      data={data}
      level={'level' in props ? props.level : undefined}
      size={'size' in props ? props.size : undefined}
    >
      {(iconProps) => <IconClear {...iconProps} />}
    </IconButton>
  ),
);
