import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconVisibilityHiddenSvg } from './IconVisibilityHiddenSvg';
import { IconVisibilitySvg } from './IconVisibilitySvg';

export type IconVisibilityProps = UseIconProps & {
  hidden?: boolean;
};

export const IconVisibility = ({ hidden, ...props }: IconVisibilityProps) => {
  const iconProps = useIcon(props);

  return (
    <Box
      component={hidden ? IconVisibilityHiddenSvg : IconVisibilitySvg}
      {...iconProps}
    />
  );
};
