import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconVideoSvg } from './IconVideoSvg';

export type IconVideoProps = UseIconProps;

export const IconVideo = (props: IconVideoProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconVideoSvg} {...iconProps} />;
};
