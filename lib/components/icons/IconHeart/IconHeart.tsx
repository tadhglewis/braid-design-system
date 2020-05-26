import React from 'react';
import { IconHeartSvg } from './IconHeartSvg';
import { IconHeartActiveSvg } from './IconHeartActiveSvg';
import {
  FillableIcon,
  FillableIconProps,
} from '../../private/icons/FillableIcon';

export type IconHeartProps = FillableIconProps;

export const IconHeart = (props: IconHeartProps) => (
  <FillableIcon
    inactiveSvgComponent={IconHeartSvg}
    activeSvgComponent={IconHeartActiveSvg}
    {...props}
  />
);
