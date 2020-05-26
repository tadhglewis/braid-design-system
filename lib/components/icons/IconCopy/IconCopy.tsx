import React from 'react';
import { Box } from '../../Box/Box';
import { useIcon, UseIconProps } from '../../private/icons/useIcon';
import { IconCopySvg } from './IconCopySvg';

export type IconCopyProps = UseIconProps;

export const IconCopy = (props: IconCopyProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCopySvg} {...iconProps} />;
};
