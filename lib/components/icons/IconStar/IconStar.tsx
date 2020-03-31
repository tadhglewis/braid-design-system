import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconStarActiveSvg } from './IconStarActiveSvg';
import { IconStarSvg } from './IconStarSvg';

export type IconStarProps = UseIconProps & {
  active?: boolean;
};

export const IconStar = ({ active = false, ...props }: IconStarProps) => {
  const iconProps = useIcon(props);

  return (
    <Box component={active ? IconStarActiveSvg : IconStarSvg} {...iconProps} />
  );
};
