import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconDateSvg } from './IconDateSvg';

export type IconDateProps = UseIconProps;

export const IconDate = (props: IconDateProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconDateSvg} {...iconProps} />;
};
