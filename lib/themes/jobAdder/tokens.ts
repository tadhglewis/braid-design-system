import { rgba } from 'polished';
import { TreatTokens } from '../makeBraidTheme';

const brand = '#1971c2';
const info = '#142d69';

const bodyBackground = '#f0f2f5';
const brandAccent = brand;
const formAccent = brand;

const white = '#fff';
const blue5 = '#EEF8FC';
const alert = '#eb0000';
const grey1 = '#333';
const grey2 = '#666';
const grey4 = '#ccc';
const grey5 = '#eee';
const promote = '#923f92';
const positive = '#498307';
const critical = alert;
const caution = '#ffc600';
const focus = rgba(brand, 0.7);
const link = brand;
const linkHover = link;
const linkVisited = '#3f11a3';
const selection = blue5;
const secondary = grey2;
const neutral = grey2;

const grid = 2;
const pxToRows = (px: number) => Math.floor(px / grid);

const tokens: TreatTokens = {
  name: 'jobAdder',
  displayName: 'JobAdder',
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    webFont: null,
    fontMetrics: {
      capHeight: 1467,
      ascent: 1854,
      descent: -434,
      lineGap: 67,
      unitsPerEm: 2048,
    },
    fontWeight: {
      regular: 400,
      medium: 600,
      strong: 800,
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'medium',
      },
      level: {
        '1': {
          mobile: {
            fontSize: 18,
            rows: pxToRows(28),
          },
          tablet: {
            fontSize: 18,
            rows: pxToRows(28),
          },
        },
        '2': {
          mobile: {
            fontSize: 15,
            rows: pxToRows(24),
          },
          tablet: {
            fontSize: 15,
            rows: pxToRows(24),
          },
        },
        '3': {
          mobile: {
            fontSize: 14,
            rows: pxToRows(24),
          },
          tablet: {
            fontSize: 14,
            rows: pxToRows(24),
          },
        },
        '4': {
          mobile: {
            fontSize: 13,
            rows: pxToRows(24),
          },
          tablet: {
            fontSize: 13,
            rows: pxToRows(24),
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          fontSize: 11,
          rows: pxToRows(14),
        },
        tablet: {
          fontSize: 11,
          rows: pxToRows(14),
        },
      },
      small: {
        mobile: {
          fontSize: 12,
          rows: pxToRows(18),
        },
        tablet: {
          fontSize: 12,
          rows: pxToRows(18),
        },
      },
      standard: {
        mobile: {
          fontSize: 12,
          rows: pxToRows(18),
        },
        tablet: {
          fontSize: 12,
          rows: pxToRows(18),
        },
      },
      large: {
        mobile: {
          fontSize: 13,
          rows: pxToRows(20),
        },
        tablet: {
          fontSize: 13,
          rows: pxToRows(20),
        },
      },
    },
  },
  breakpoint: {
    mobile: 0,
    tablet: 768,
    desktop: 992,
  },
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 940,
    large: 1280,
  },
  grid,
  touchableSize: pxToRows(36),
  space: {
    gutter: 8,
    xxsmall: 2,
    xsmall: 3,
    small: 4,
    medium: 6,
    large: 10,
    xlarge: 14,
    xxlarge: 20,
  },
  transforms: {
    touchable: 'scale(0.98)',
  },
  transitions: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  },
  border: {
    radius: {
      standard: '4px',
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      standard: '#CFCFCF',
      standardInverted: white,
      field: '#CFCFCF',
      focus,
      critical,
      info,
      promote,
      positive,
      caution,
      formHover: formAccent,
      formAccent,
    },
  },
  shadows: {
    small:
      '0 2px 4px 0px rgba(28,28,28,.1), 0 2px 2px -2px rgba(28,28,28,.1), 0 4px 4px -4px rgba(28,28,28,.2)',
    medium:
      '0 2px 4px 0px rgba(28,28,28,.1), 0 8px 8px -4px rgba(28,28,28,.1), 0 12px 12px -8px rgba(28,28,28,.2)',
    large:
      '0 2px 4px 0px rgba(28,28,28,.1), 0 12px 12px -4px rgba(28,28,28,.1), 0 20px 20px -12px rgba(28,28,28,.2)',
  },
  color: {
    foreground: {
      link,
      linkHover,
      linkVisited,
      neutral: grey1,
      neutralInverted: white,
      formAccent,
      critical,
      caution,
      positive,
      info,
      promote,
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
      rating: '#ff9000',
    },
    background: {
      body: bodyBackground,
      brand,
      input: white,
      inputDisabled: grey5,
      brandAccent,
      formAccent,
      formAccentDisabled: grey4,
      selection,
      card: white,
      critical,
      caution,
      positive,
      neutral,
      info,
      promote,
    },
  },
};

export default tokens;
