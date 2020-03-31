import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconCopySvg } from './IconCopySvg';

export type IconCopyProps = UseIconProps;

export const IconCopy = (props: IconCopyProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCopySvg} {...iconProps} />;
};
