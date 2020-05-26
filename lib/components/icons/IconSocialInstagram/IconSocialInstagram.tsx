import React from 'react';
import { Box } from '../../Box/Box';
import { useIcon, UseIconProps } from '../../private/icons/useIcon';
import { IconSocialInstagramSvg } from './IconSocialInstagramSvg';

export type IconSocialInstagramProps = UseIconProps;

export const IconSocialInstagram = (props: IconSocialInstagramProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSocialInstagramSvg} {...iconProps} />;
};
