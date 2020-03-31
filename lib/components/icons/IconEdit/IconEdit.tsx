import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconEditSvg } from './IconEditSvg';

export type IconEditProps = UseIconProps;

export const IconEdit = (props: IconEditProps) => {
  const iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: 'none',
      lowercase: 'up',
    },
  });

  return <Box component={IconEditSvg} {...iconProps} />;
};
