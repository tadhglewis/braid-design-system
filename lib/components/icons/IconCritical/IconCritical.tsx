import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconCriticalSvg } from './IconCriticalSvg';

export type IconCriticalProps = UseIconProps;

export const IconCritical = (props: IconCriticalProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCriticalSvg} {...iconProps} />;
};
