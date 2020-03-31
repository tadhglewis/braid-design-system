import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconDownloadSvg } from './IconDownloadSvg';

export type IconDownloadProps = UseIconProps;

export const IconDownload = (props: IconDownloadProps) => {
  const iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: 'none',
      lowercase: 'up',
    },
  });

  return <Box component={IconDownloadSvg} {...iconProps} />;
};
