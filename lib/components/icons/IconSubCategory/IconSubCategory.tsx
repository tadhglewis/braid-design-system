import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconSubCategorySvg } from './IconSubCategorySvg';

export type IconSubCategoryProps = UseIconProps;

export const IconSubCategory = (props: IconSubCategoryProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSubCategorySvg} {...iconProps} />;
};
