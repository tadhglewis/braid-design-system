import mapValues from 'lodash/mapValues';
import { styleMap } from 'sku/treat';

export const size = styleMap(({ utils, grid, typography }) =>
  mapValues(typography.text, ({ mobile, tablet }) =>
    utils.responsiveStyle({
      mobile: { height: grid * mobile.rows },
      tablet: { height: grid * tablet.rows },
    }),
  ),
);
