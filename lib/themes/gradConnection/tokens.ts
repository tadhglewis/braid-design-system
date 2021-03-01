import { TreatTokens } from '../makeBraidTheme';

const brand = '#8bc34a';
const formAccent = brand;
const critical = '#e2472b';
const positive = '#00af50';
const info = '#0065de';
const promote = '#855be5';
const caution = '#ffc600';
const brandAccent = '#ea4949';
const focus = brand;
const black = '#303339';
const white = '#fff';
const link = formAccent;
const linkVisited = 'DarkViolet';
const secondary = '#666';
const neutral = '#f0f0f0';

const tokens: TreatTokens = {
  name: 'gradConnection',
  displayName: 'Grad Connection',
  typography: {
    fontFamily:
      'Source Sans Pro, -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    webFont: 'Source Sans Pro',
    fontMetrics: {
      capHeight: 660,
      ascent: 984,
      descent: -273,
      lineGap: 0,
      unitsPerEm: 1000,
    },
    fontWeight: {
      regular: 400,
      medium: 600,
      strong: 700,
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'medium',
      },
      level: {
        '1': {
          mobile: {
            fontSize: 26,
            rows: 9,
          },
          tablet: {
            fontSize: 26,
            rows: 15,
          },
        },
        '2': {
          mobile: {
            fontSize: 22,
            rows: 7,
          },
          tablet: {
            fontSize: 22,
            rows: 7,
          },
        },
        '3': {
          mobile: {
            fontSize: 17,
            rows: 6,
          },
          tablet: {
            fontSize: 17,
            rows: 6,
          },
        },
        '4': {
          mobile: {
            fontSize: 17,
            rows: 6,
          },
          tablet: {
            fontSize: 17,
            rows: 6,
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          fontSize: 10,
          rows: 4,
        },
        tablet: {
          fontSize: 10,
          rows: 4,
        },
      },
      small: {
        mobile: {
          fontSize: 13,
          rows: 5,
        },
        tablet: {
          fontSize: 13,
          rows: 5,
        },
      },
      standard: {
        mobile: {
          fontSize: 14,
          rows: 6,
        },
        tablet: {
          fontSize: 14,
          rows: 6,
        },
      },
      large: {
        mobile: {
          fontSize: 16,
          rows: 7,
        },
        tablet: {
          fontSize: 16,
          rows: 7,
        },
      },
    },
  },
  breakpoint: {
    mobile: 0,
    tablet: 768,
    desktop: 1136,
  },
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 1080,
    large: 1308,
  },
  grid: 4,
  touchableSize: 11,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 5,
    large: 8,
    xlarge: 11,
    xxlarge: 15,
  },
  transforms: {
    touchable: 'scale(0.97)',
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
      standard: '#ededed',
      standardInverted: white,
      field: '#ededed',
      focus,
      critical,
      info,
      promote,
      positive,
      caution,
      formHover: formAccent,
      formAccent,
      brandAccent,
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
      linkHover: link,
      linkVisited,
      neutral: black,
      neutralInverted: white,
      formAccent,
      brandAccent,
      critical,
      caution,
      positive,
      info,
      promote,
      secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
      rating: black,
    },
    background: {
      body: '#f5f5f5',
      brand,
      input: white,
      inputDisabled: '#fcfcfc',
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      selection: '#d6edbc',
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
