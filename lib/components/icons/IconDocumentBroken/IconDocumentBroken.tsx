import React from 'react';
import { Box } from '../../Box/Box';
import { useIcon, UseIconProps } from '../../private/icons/useIcon';
import { IconDocumentBrokenSvg } from './IconDocumentBrokenSvg';

export type IconDocumentBrokenProps = UseIconProps;

export const IconDocumentBroken = (props: IconDocumentBrokenProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconDocumentBrokenSvg} {...iconProps} />;
};
