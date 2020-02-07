import { style } from 'sku/treat';
export const zIndex = 502;
// export const headerHeight = 60;

export const headerHeight = style({ height: 60 });

export const header = style({
  justifyContent: 'space-between',
  alignItems: 'center',
  // height: `${headerHeight}px`,
});

export const mobileMenuOpen = style(theme =>
  theme.utils.responsiveStyle({
    mobile: {
      top: '0px',
      left: '0px',
      position: 'fixed',
      zIndex,
    },
    tablet: {
      position: 'static',
    },
  }),
);

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
