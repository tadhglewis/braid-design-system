import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconDeleteSvg } from './IconDeleteSvg';

export type IconDeleteProps = UseIconProps;

export const IconDelete = (props: IconDeleteProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconDeleteSvg} {...iconProps} />;
};
