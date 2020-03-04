import { style } from 'sku/treat';
export const zIndex = 502;
// export const headerHeight = 60;

export const headerHeight = style({ height: 60 });

export const header = style({
  justifyContent: 'space-between',
  alignItems: 'center',
  // height: `${headerHeight}px`,
});

export const buttonLink = style({
  ':hover': {
    textDecoration: 'none',
  },
});

export const tab2 = style({
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

export const selectionOnHover = style(theme => ({
  // height: `${headerHeight}px`,
  ':hover': {
    background: theme.color.background.selection,
    // textDecoration: 'none',
  },
}));

export const menuCheckbox = style({});
export const menuCheckboxLabel = style({});
export const menuCheckboxLabelFocus = style({
  left: -4,
  right: -1,
  selectors: {
    [`${menuCheckbox}:focus ~ ${menuCheckboxLabel} &`]: {
      opacity: 1,
    },
  },
});
export const menuChevron = style({
  selectors: {
    [`${menuCheckbox}:checked ~ ${menuCheckboxLabel} &`]: {
      transform: 'rotate(180deg)',
    },
  },
});
export const menuContents = style({
  opacity: 0,
  transform: 'translateY(calc(100% -10px))',
  zIndex: 2,
  selectors: {
    [`${menuCheckbox}:checked ~ &`]: {
      opacity: 1,
      transform: 'translateY(100%)',
      pointerEvents: 'auto',
    },
  },
});
export const menuBackdrop = style({
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  selectors: {
    [`${menuCheckbox}:checked ~ &`]: {
      // background: 'rgba(0,0,0,0.2)',
      display: 'block',
    },
  },
});

export const menuItem = style(theme => ({
  selectors: {
    '&:hover': {
      background: theme.color.background.selection,
    },
  },
}));
