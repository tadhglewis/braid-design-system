import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconLinkBrokenSvg } from './IconLinkBrokenSvg';

export type IconLinkBrokenProps = UseIconProps;

export const IconLinkBroken = (props: IconLinkBrokenProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconLinkBrokenSvg} {...iconProps} />;
};
