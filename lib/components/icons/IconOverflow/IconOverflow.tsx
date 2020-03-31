import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconOverflowSvg } from './IconOverflowSvg';

export type IconOverflowProps = UseIconProps;

export const IconOverflow = (props: IconOverflowProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconOverflowSvg} {...iconProps} />;
};
