import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconLinkSvg } from './IconLinkSvg';

export type IconLinkProps = UseIconProps;

export const IconLink = (props: IconLinkProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconLinkSvg} {...iconProps} />;
};
