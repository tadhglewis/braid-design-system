import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconHeartActiveSvg } from './IconHeartActiveSvg';
import { IconHeartSvg } from './IconHeartSvg';

export type IconHeartProps = UseIconProps & {
  active?: boolean;
};

export const IconHeart = ({ active = false, ...props }: IconHeartProps) => {
  const iconProps = useIcon(props);

  return (
    <Box
      component={active ? IconHeartActiveSvg : IconHeartSvg}
      {...iconProps}
    />
  );
};
