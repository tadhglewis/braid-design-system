import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconSocialLinkedInSvg } from './IconSocialLinkedInSvg';

export type IconSocialLinkedInProps = UseIconProps;

export const IconSocialLinkedIn = (props: IconSocialLinkedInProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSocialLinkedInSvg} {...iconProps} />;
};
