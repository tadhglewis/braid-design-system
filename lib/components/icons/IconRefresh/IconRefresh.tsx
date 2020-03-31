import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconRefreshSvg } from './IconRefreshSvg';

export type IconRefreshProps = UseIconProps;

export const IconRefresh = (props: IconRefreshProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconRefreshSvg} {...iconProps} />;
};
