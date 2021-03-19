import { style } from '@mattsjones/css-core';
import { calc } from '@mattsjones/css-utils';
import { themeVars } from '../../themes/themeVars.css';

const OVERFLOW_ICON_WIDTH = '4px';
const OVERFLOW_ICON_HEIGHT = '14px';

const circleSize = themeVars.typography.text.standard.mobile.leading;
const offsetX = calc(circleSize)
  .subtract(OVERFLOW_ICON_WIDTH)
  .divide(2)
  .negate();
const offsetY = calc(circleSize)
  .subtract(OVERFLOW_ICON_HEIGHT)
  .divide(2)
  .negate();

export const triggerOffset = style({
  margin: `${offsetY} ${offsetX}`,
});
