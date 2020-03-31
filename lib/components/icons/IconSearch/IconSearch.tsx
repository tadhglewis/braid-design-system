import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconSearchSvg } from './IconSearchSvg';

export type IconSearchProps = UseIconProps;

export const IconSearch = (props: IconSearchProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSearchSvg} {...iconProps} />;
};
