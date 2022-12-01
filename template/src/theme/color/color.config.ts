import { theme } from 'native-base';

import { getColorValue } from '../helpers/color.module';
import { ColorConfig, colorScheme, colorShade, ColorValue, ColorValues } from './color.type';

/** Color config. */
export const colorConfig: ColorConfig = {
  primary: theme.colors.darkBlue,
  secondary: theme.colors.blue,
  danger: theme.colors.rose,
  success: theme.colors.emerald,
  warning: theme.colors.amber,
  info: theme.colors.cyan,
  light: theme.colors.light,
  dark: theme.colors.coolGray,
  muted: theme.colors.gray,
};

/** Color values. */
const colorValues = {} as ColorValues;

// Init color values from color scheme and shade
Object.values(colorScheme).forEach((scheme) => {
  const colorValue = {} as ColorValue;

  Object.values(colorShade).forEach((shade) => {
    colorValue[shade] = getColorValue({ scheme, shade });
  });

  colorValues[scheme] = colorValue;
});

export { colorValues };
