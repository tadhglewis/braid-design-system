import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconSecuritySvg } from './IconSecuritySvg';

export type IconSecurityProps = UseIconProps;

export const IconSecurity = (props: IconSecurityProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSecuritySvg} {...iconProps} />;
};
