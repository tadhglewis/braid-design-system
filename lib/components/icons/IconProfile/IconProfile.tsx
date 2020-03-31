import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconProfileSvg } from './IconProfileSvg';

export type IconProfileProps = UseIconProps;

export const IconProfile = (props: IconProfileProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconProfileSvg} {...iconProps} />;
};
