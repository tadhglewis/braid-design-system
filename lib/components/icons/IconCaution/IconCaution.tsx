import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconCautionSvg } from './IconCautionSvg';

export type IconCautionProps = UseIconProps;

export const IconCaution = (props: IconCautionProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCautionSvg} {...iconProps} />;
};
