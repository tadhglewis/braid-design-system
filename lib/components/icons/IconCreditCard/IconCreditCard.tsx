import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconCreditCardSvg } from './IconCreditCardSvg';

export type IconCreditCardProps = UseIconProps;

export const IconCreditCard = (props: IconCreditCardProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCreditCardSvg} {...iconProps} />;
};
