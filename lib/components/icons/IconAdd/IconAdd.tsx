import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconAddSvg } from './IconAddSvg';

export type IconAddProps = UseIconProps;

export const IconAdd = (props: IconAddProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconAddSvg} {...iconProps} />;
};
