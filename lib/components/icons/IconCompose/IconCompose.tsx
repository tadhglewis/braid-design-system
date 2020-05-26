import React from 'react';
import { Box } from '../../Box/Box';
import { useIcon, UseIconProps } from '../../private/icons/useIcon';
import { IconComposeSvg } from './IconComposeSvg';

export type IconComposeProps = UseIconProps;

export const IconCompose = (props: IconComposeProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconComposeSvg} {...iconProps} />;
};
