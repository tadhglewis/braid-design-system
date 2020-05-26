import React from 'react';
import { Box } from '../../Box/Box';
import { useIcon, UseIconProps } from '../../private/icons/useIcon';
import { IconGridSvg } from './IconGridSvg';

export type IconGridProps = UseIconProps;

export const IconGrid = (props: IconGridProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconGridSvg} {...iconProps} />;
};
