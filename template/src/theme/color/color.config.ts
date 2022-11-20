import { theme } from 'native-base';

import { ColorConfig, ColorShade, ColorValue, ColorValues, ColorVariant } from './color.type';

/** Color config. */
export const colorConfig: ColorConfig = {
  primary: theme.colors.violet,
  secondary: theme.colors.yellow,
  danger: theme.colors.rose,
  success: theme.colors.emerald,
  warning: theme.colors.amber,
  info: theme.colors.cyan,
  light: {
    50: '#1d1126',
    100: '#2d1f38',
    200: '#463752',
    300: '#594c63',
    400: '#776b80',
    500: '#a89db0',
    600: '#d7d0db',
    700: '#ebe4e4',
    800: '#f4f2f5',
    900: '#f9f7fa',
  },
  dark: {
    50: '#f9f7fa',
    100: '#f4f2f5',
    200: '#ebe4e4',
    300: '#d7d0db',
    400: '#a89db0',
    500: '#776b80',
    600: '#594c63',
    700: '#463752',
    800: '#2d1f38',
    900: '#1d1126',
  },
  muted: theme.colors.coolGray,
};
// Init color values
const colorValues = {} as ColorValues;
Object.values(ColorVariant).forEach((variant) => {
  const colorValue = {} as ColorValue;

  Object.values(ColorShade).forEach((shade) => {
    colorValue[shade] = `${variant}.${shade}`;
  });

  colorValues[variant] = colorValue;
});

export { colorValues };
