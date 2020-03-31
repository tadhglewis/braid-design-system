import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconPeopleSvg } from './IconPeopleSvg';

export type IconPeopleProps = UseIconProps;

export const IconPeople = (props: IconPeopleProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconPeopleSvg} {...iconProps} />;
};
