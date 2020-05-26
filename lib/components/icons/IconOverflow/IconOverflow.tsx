import React from 'react';
import { Box } from '../../Box/Box';
import { useIcon, UseIconProps } from '../../private/icons/useIcon';
import { IconOverflowSvg } from './IconOverflowSvg';

export type IconOverflowProps = UseIconProps;

export const IconOverflow = (props: IconOverflowProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconOverflowSvg} {...iconProps} />;
};
