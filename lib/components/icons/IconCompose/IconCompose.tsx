import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconComposeSvg } from './IconComposeSvg';

export type IconComposeProps = UseIconProps;

export const IconCompose = (props: IconComposeProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconComposeSvg} {...iconProps} />;
};
