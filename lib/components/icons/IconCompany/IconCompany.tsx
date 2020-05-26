import React from 'react';
import { Box } from '../../Box/Box';
import { useIcon, UseIconProps } from '../../private/icons/useIcon';
import { IconCompanySvg } from './IconCompanySvg';

export type IconCompanyProps = UseIconProps;

export const IconCompany = (props: IconCompanyProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCompanySvg} {...iconProps} />;
};
