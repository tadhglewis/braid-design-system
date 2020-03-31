import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconNewWindowSvg } from './IconNewWindowSvg';

export type IconNewWindowProps = UseIconProps;

export const IconNewWindow = (props: IconNewWindowProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconNewWindowSvg} {...iconProps} />;
};
