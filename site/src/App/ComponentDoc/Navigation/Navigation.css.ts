import { style } from '@mattsjones/css-core';
import { negate } from '@mattsjones/css-utils';
import { themeVars } from '../../../../../lib/themes/themeVars.css';

export const activeUnderline = style({
  height: themeVars.border.width.large,
  background: themeVars.color.foreground.neutral,
});

export const inactiveUnderlineCorrection = style({
  marginTop: negate(themeVars.border.width.standard),
});

export const centerHorizontally = style({
  left: '50%',
  transform: 'translateX(-50%)',
});