import React from 'react';
import { IconStarSvg } from './IconStarSvg';
import { IconStarActiveSvg } from './IconStarActiveSvg';
import {
  FillableIcon,
  FillableIconProps,
} from '../../private/icons/FillableIcon';

export type IconStarProps = FillableIconProps;

export const IconStar = (props: IconStarProps) => (
  <FillableIcon
    inactiveSvgComponent={IconStarSvg}
    activeSvgComponent={IconStarActiveSvg}
    {...props}
  />
);
