import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconRecommendedSvg } from './IconRecommendedSvg';

export type IconRecommendedProps = UseIconProps;

export const IconRecommended = (props: IconRecommendedProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconRecommendedSvg} {...iconProps} />;
};
