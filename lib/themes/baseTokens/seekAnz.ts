import { TreatTokens } from '../makeBraidTheme';
import { DeepPartial } from 'utility-types';
import { rgba } from 'polished';
import merge from 'lodash/merge';
import { generateSwatch } from '../../utils/generateSwatch';

interface MakeTokensOptions {
  name: string;
  displayName: string;
  brand: string;
  brandAccent: string;
  formAccent: string;
  tokenOverrides?: DeepPartial<TreatTokens>;
}
export const makeTokens = ({
  name,
  displayName,
  brand,
  brandAccent,
  formAccent,
  tokenOverrides = {},
}: MakeTokensOptions): TreatTokens => {
  const palette = {
    brandPrimary: generateSwatch('#e60278'),
    brandSecondary: generateSwatch('#0D3880'),
    grey: generateSwatch('#a8a8a8'),
    yellow: generateSwatch('#ffc600'),
    orange: generateSwatch('hsl(24, 94%, 50%)'),
    red: generateSwatch('hsl(352, 99%, 41%)'),
    purple: generateSwatch('hsl(280, 51%, 35%)'),
    violet: generateSwatch('hsl(254, 61%, 53%)'),
    indigo: generateSwatch('hsl(217, 68%, 52%)'),
    blue: generateSwatch('hsl(200, 77%, 49%)'),
    cyan: generateSwatch('hsl(183, 100%, 34%)'),
    green: generateSwatch('#138a08'),
    black: '#1c1c1c',
    white: '#fff',
  };

  const { black, white } = palette;
  const focus = rgba('#1e90ff', 0.7);
  const positive = palette.green['500'];
  const critical = palette.brandPrimary['500'];
  const info = '#1e468c';
  const promote = '#9556b7';
  const caution = palette.yellow['500'];
  const neutral = '#747474';
  const link = '#2765cf';
  const linkVisited = '#733d90';
  const secondary = '#1c1c1ca1';

  const tokens: TreatTokens = {
    name,
    displayName,
    typography: {
      fontFamily:
        'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
      webFont: null,
      descenderHeightScale: 0.165,
      capHeightScale: 0.6,
      fontWeight: {
        regular: 400,
        medium: 500,
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
              size: 28,
              rows: 9,
            },
            tablet: {
              size: 42,
              rows: 11,
            },
          },
          '2': {
            mobile: {
              size: 21,
              rows: 8,
            },
            tablet: {
              size: 28,
              rows: 9,
            },
          },
          '3': {
            mobile: {
              size: 21,
              rows: 7,
            },
            tablet: {
              size: 21,
              rows: 7,
            },
          },
          '4': {
            mobile: {
              size: 18,
              rows: 7,
            },
            tablet: {
              size: 18,
              rows: 7,
            },
          },
        },
      },
      text: {
        xsmall: {
          mobile: {
            size: 12,
            rows: 5,
          },
          tablet: {
            size: 12,
            rows: 5,
          },
        },
        small: {
          mobile: {
            size: 14,
            rows: 5,
          },
          tablet: {
            size: 14,
            rows: 5,
          },
        },
        standard: {
          mobile: {
            size: 16,
            rows: 6,
          },
          tablet: {
            size: 16,
            rows: 6,
          },
        },
        large: {
          mobile: {
            size: 18,
            rows: 7,
          },
          tablet: {
            size: 18,
            rows: 7,
          },
        },
      },
    },
    breakpoint: {
      mobile: 0,
      tablet: 740,
      desktop: 992,
    },
    contentWidth: {
      medium: 940,
      large: 1280,
    },
    grid: 4,
    touchableSize: 12,
    space: {
      gutter: 6,
      xxsmall: 1,
      xsmall: 2,
      small: 3,
      medium: 5,
      large: 8,
      xlarge: 12,
      xxlarge: 24,
    },
    transforms: {
      touchable: 'scale(0.95)',
    },
    transitions: {
      fast: 'transform .125s ease, opacity .125s ease',
      touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
    },
    border: {
      radius: {
        standard: '2px',
      },
      width: {
        standard: 1,
        large: 2,
      },
      color: {
        standard: '#d6d6d6',
        standardInverted: white,
        focus,
        formHover: formAccent,
        critical,
        info,
        promote,
        positive,
        caution,
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
      palette,
      foreground: {
        link,
        linkHover: link,
        linkVisited,
        neutral: black,
        neutralInverted: white,
        formAccent,
        critical,
        caution,
        positive,
        info,
        promote,
        secondary,
        secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
        rating: '#f57c00',
      },
      background: {
        body: '#eee',
        brand,
        input: white,
        inputDisabled: '#eee',
        brandAccent,
        formAccent,
        formAccentDisabled: '#ccc',
        selection: '#f1f7ff',
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

  return merge(tokens, tokenOverrides);
};
