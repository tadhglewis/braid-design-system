import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconHomeSvg } from './IconHomeSvg';

export type IconHomeProps = UseIconProps;

export const IconHome = (props: IconHomeProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconHomeSvg} {...iconProps} />;
};
