import { ValueOf } from 'type-fest';

/** Color scheme. */
export const colorScheme = {
  /** Primary color. */
  primary: 'primary',
  /** Secondary color. */
  secondary: 'secondary',
  /** Danger color. */
  danger: 'danger',
  /** Success color. */
  success: 'success',
  /** Warning color. */
  warning: 'warning',
  /** Info color. */
  info: 'info',
  /** Light color. */
  light: 'light',
  /** Dark color. */
  dark: 'dark',
  /** Muted color. */
  muted: 'muted',
} as const;

/** Color scheme type. */
export type ColorScheme = ValueOf<typeof colorScheme>;

/** Color shade. */
export const colorShade = {
  /** Color shade 50. */
  50: 50,
  /** Color shade 100. */
  100: 100,
  /** Color shade 200. */
  200: 200,
  /** Color shade 300. */
  300: 300,
  /** Color shade 400. */
  400: 400,
  /** Color shade 500. */
  500: 500,
  /** Color shade 600. */
  600: 600,
  /** Color shade 700. */
  700: 700,
  /** Color shade 800. */
  800: 800,
  /** Color shade 900. */
  900: 900,
} as const;

/** Color shade type. */
export type ColorShade = ValueOf<typeof colorShade>;

/** Color struct. */
export type ColorStruct = {
  /** Color scheme. */
  scheme: ColorScheme;
  /** Color shade. */
  shade: ColorShade;
};

/** Color value. */
export type ColorValue = Record<ColorShade, string>;

/** Color values. */
export type ColorValues = Record<ColorScheme, ColorValue>;

/** Color config. */
export type ColorConfig = Partial<ColorValues>;
