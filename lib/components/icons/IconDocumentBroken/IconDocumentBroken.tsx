import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconDocumentBrokenSvg } from './IconDocumentBrokenSvg';

export type IconDocumentBrokenProps = UseIconProps;

export const IconDocumentBroken = (props: IconDocumentBrokenProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconDocumentBrokenSvg} {...iconProps} />;
};
