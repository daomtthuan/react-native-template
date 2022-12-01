import { roundWholeNumber } from '@/common/logic';

import { colorScheme, ColorScheme, ColorShade, colorShade, ColorStruct } from '../color/color.type';

/**
 * Get color structure from color value.
 *
 * @param colorValue The color value.
 *
 * @returns The color structure.
 */
export function getColorStruct(colorValue: string) {
  const [scheme, shade] = colorValue.split('.') as [ColorScheme, ColorShade];
  if (scheme && shade && scheme in Object.values(colorScheme) && shade in Object.values(colorShade)) {
    return { scheme, shade };
  }

  return null;
}

/**
 * Get color value from color structure.
 *
 * @param colorStruct The color structure.
 *
 * @returns The color value.
 */
export function getColorValue({ scheme, shade }: ColorStruct) {
  return `${scheme}.${shade}`;
}

/**
 * Get color scheme from pure color scheme.
 *
 * @param pureColorScheme The pure color scheme.
 * @param defaultColorScheme Default color scheme.
 *
 * @returns The color scheme.
 */
export function getColorScheme(pureColorScheme?: string, defaultColorScheme: ColorScheme = 'primary') {
  if (pureColorScheme) {
    if (Object.values<string>(colorScheme).includes(pureColorScheme)) {
      return pureColorScheme as ColorScheme;
    }
  }

  return defaultColorScheme;
}

/**
 * Lighten color.
 *
 * @param colorValue The color value to lighten.
 * @param factor The factor.
 *
 * @returns The lighten color value.
 */
export function lightenColor(colorValue: string, factor: number) {
  const colorStruct = getColorStruct(colorValue);
  if (!colorStruct) {
    return colorValue;
  }

  const { scheme, shade } = colorStruct;

  let lightenShade;
  if (scheme === colorScheme.light) {
    // Lighten shade of light scheme by factor. Max shade is 900.
    lightenShade = Math.min(roundWholeNumber(shade + factor, 2), colorShade[900]) as ColorShade;
  } else {
    // Lighten shade of other schemes by factor. Min shade is 50.
    lightenShade = Math.max(roundWholeNumber(shade - factor, 2), colorShade[50]) as ColorShade;
  }

  return getColorValue({ scheme, shade: lightenShade });
}

/**
 * Darken color.
 *
 * @param colorValue The color value to darken.
 * @param factor The factor.
 *
 * @returns The darken color value.
 */
export function darkenColor(colorValue: string, factor: number) {
  const colorStruct = getColorStruct(colorValue);
  if (!colorStruct) {
    return colorValue;
  }

  const { scheme, shade } = colorStruct;

  let darkenShade;
  if (scheme === colorScheme.light) {
    // Darken shade of light scheme by factor. Min shade is 50.
    darkenShade = Math.max(roundWholeNumber(shade - factor, 2), colorShade[50]) as ColorShade;
  } else {
    // Darken shade of other schemes by factor. Max shade is 900.
    darkenShade = Math.min(roundWholeNumber(shade + factor, 2), colorShade[900]) as ColorShade;
  }

  return getColorValue({ scheme, shade: darkenShade });
}
