import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconUploadSvg } from './IconUploadSvg';

export type IconUploadProps = UseIconProps;

export const IconUpload = (props: IconUploadProps) => {
  const iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: 'none',
      lowercase: 'up',
    },
  });

  return <Box component={IconUploadSvg} {...iconProps} />;
};
