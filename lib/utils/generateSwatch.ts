import { lighten, darken, mix } from 'polished';

export const generateSwatch = (baseColor: string) => {
  return {
    50: mix(0.96, '#fff', baseColor),
    100: mix(0.9, '#fff', baseColor),
    200: mix(0.8, '#fff', baseColor),
    300: mix(0.6, '#fff', baseColor),
    400: mix(0.3, '#fff', baseColor),
    500: baseColor,
    600: mix(0.2, '#000', baseColor),
    700: mix(0.4, '#000', baseColor),
    800: mix(0.6, '#000', baseColor),
    900: mix(0.8, '#000', baseColor),
  } as const;
};
