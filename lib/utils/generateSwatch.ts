import { setLightness, mix } from 'polished';

export const generateSwatch = (baseColor: string) => {
  const lightShade = setLightness(0.98, baseColor);
  const darkShade = setLightness(0.05, baseColor);

  return {
    50: mix(0.98, lightShade, baseColor),
    100: mix(0.9, lightShade, baseColor),
    200: mix(0.75, lightShade, baseColor),
    300: mix(0.5, lightShade, baseColor),
    400: mix(0.25, lightShade, baseColor),
    500: baseColor,
    600: mix(0.25, darkShade, baseColor),
    700: mix(0.5, darkShade, baseColor),
    800: mix(0.75, darkShade, baseColor),
    900: mix(0.95, darkShade, baseColor),
  } as const;
};
