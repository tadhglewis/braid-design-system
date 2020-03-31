import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconMinusSvg } from './IconMinusSvg';

export type IconMinusProps = UseIconProps;

export const IconMinus = (props: IconMinusProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconMinusSvg} {...iconProps} />;
};
