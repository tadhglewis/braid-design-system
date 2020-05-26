import React from 'react';
import { Box } from '../../Box/Box';
import { useIcon, UseIconProps } from '../../private/icons/useIcon';
import { IconCriticalSvg } from './IconCriticalSvg';

export type IconCriticalProps = UseIconProps;

export const IconCritical = (props: IconCriticalProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCriticalSvg} {...iconProps} />;
};
