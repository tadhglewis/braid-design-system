import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconGridSvg } from './IconGridSvg';

export type IconGridProps = UseIconProps;

export const IconGrid = (props: IconGridProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconGridSvg} {...iconProps} />;
};
