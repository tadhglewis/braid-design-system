import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconMoneySvg } from './IconMoneySvg';

export type IconMoneyProps = UseIconProps;

export const IconMoney = (props: IconMoneyProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconMoneySvg} {...iconProps} />;
};
