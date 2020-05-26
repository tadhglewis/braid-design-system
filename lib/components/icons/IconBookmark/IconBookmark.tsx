import React from 'react';
import { IconBookmarkSvg } from './IconBookmarkSvg';
import { IconBookmarkActiveSvg } from './IconBookmarkActiveSvg';
import {
  FillableIcon,
  FillableIconProps,
} from '../../private/icons/FillableIcon';

export type IconBookmarkProps = FillableIconProps;

export const IconBookmark = (props: IconBookmarkProps) => (
  <FillableIcon
    inactiveSvgComponent={IconBookmarkSvg}
    activeSvgComponent={IconBookmarkActiveSvg}
    {...props}
  />
);
