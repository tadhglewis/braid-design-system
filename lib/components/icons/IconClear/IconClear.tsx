import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconClearSvg } from './IconClearSvg';

export type IconClearProps = UseIconProps;

export const IconClear = (props: IconClearProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconClearSvg} {...iconProps} />;
};
