import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconNoteSvg } from './IconNoteSvg';

export type IconNoteProps = UseIconProps;

export const IconNote = (props: IconNoteProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconNoteSvg} {...iconProps} />;
};
