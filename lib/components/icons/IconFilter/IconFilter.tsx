import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconFilterSvg } from './IconFilterSvg';

export type IconFilterProps = UseIconProps;

export const IconFilter = (props: IconFilterProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconFilterSvg} {...iconProps} />;
};
