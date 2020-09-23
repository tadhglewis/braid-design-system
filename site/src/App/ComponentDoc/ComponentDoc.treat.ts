import { style } from 'sku/treat';

export const example = style({});

export const screenshot = style({
  opacity: 0,
  selectors: {
    [`${example}:hover &`]: {
      opacity: 1,
    },
  },
});
