import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconStatisticsSvg } from './IconStatisticsSvg';

export type IconStatisticsProps = UseIconProps;

export const IconStatistics = (props: IconStatisticsProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconStatisticsSvg} {...iconProps} />;
};
