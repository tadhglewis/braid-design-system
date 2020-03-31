import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconSocialMediumSvg } from './IconSocialMediumSvg';

export type IconSocialMediumProps = UseIconProps;

export const IconSocialMedium = (props: IconSocialMediumProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSocialMediumSvg} {...iconProps} />;
};
