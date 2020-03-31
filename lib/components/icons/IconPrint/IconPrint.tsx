import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconPrintSvg } from './IconPrintSvg';

export type IconPrintProps = UseIconProps;

export const IconPrint = (props: IconPrintProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconPrintSvg} {...iconProps} />;
};
