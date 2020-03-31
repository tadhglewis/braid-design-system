import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconSendSvg } from './IconSendSvg';

export type IconSendProps = UseIconProps;

export const IconSend = (props: IconSendProps) => {
  const iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: 'none',
      lowercase: 'up',
    },
  });

  return <Box component={IconSendSvg} {...iconProps} />;
};
