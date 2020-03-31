import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconBookmarkActiveSvg } from './IconBookmarkActiveSvg';
import { IconBookmarkSvg } from './IconBookmarkSvg';

export type IconBookmarkProps = UseIconProps & {
  active?: boolean;
};

export const IconBookmark = ({
  active = false,
  ...props
}: IconBookmarkProps) => {
  const iconProps = useIcon(props);

  return (
    <Box
      component={active ? IconBookmarkActiveSvg : IconBookmarkSvg}
      {...iconProps}
    />
  );
};
