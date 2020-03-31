import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconDocumentSvg } from './IconDocumentSvg';

export type IconDocumentProps = UseIconProps;

export const IconDocument = (props: IconDocumentProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconDocumentSvg} {...iconProps} />;
};
