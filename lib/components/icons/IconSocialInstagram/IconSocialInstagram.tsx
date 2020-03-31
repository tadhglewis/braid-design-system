import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconSocialInstagramSvg } from './IconSocialInstagramSvg';

export type IconSocialInstagramProps = UseIconProps;

export const IconSocialInstagram = (props: IconSocialInstagramProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSocialInstagramSvg} {...iconProps} />;
};
