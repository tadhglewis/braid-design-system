import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconPersonVerifiedSvg } from './IconPersonVerifiedSvg';

export type IconPersonVerifiedProps = UseIconProps;

export const IconPersonVerified = (props: IconPersonVerifiedProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconPersonVerifiedSvg} {...iconProps} />;
};
