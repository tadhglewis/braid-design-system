import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconMailSvg } from './IconMailSvg';

export type IconMailProps = UseIconProps;

export const IconMail = (props: IconMailProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconMailSvg} {...iconProps} />;
};
