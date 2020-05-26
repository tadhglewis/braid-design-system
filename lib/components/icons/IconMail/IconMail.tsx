import React from 'react';
import { Box } from '../../Box/Box';
import { useIcon, UseIconProps } from '../../private/icons/useIcon';
import { IconMailSvg } from './IconMailSvg';

export type IconMailProps = UseIconProps;

export const IconMail = (props: IconMailProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconMailSvg} {...iconProps} />;
};
