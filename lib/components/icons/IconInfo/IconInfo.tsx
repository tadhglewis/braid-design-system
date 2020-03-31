import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconInfoSvg } from './IconInfoSvg';

export type IconInfoProps = UseIconProps;

export const IconInfo = (props: IconInfoProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconInfoSvg} {...iconProps} />;
};
