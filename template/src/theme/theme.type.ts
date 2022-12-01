import { extendTheme } from 'native-base';
import { ValueOf } from 'type-fest';

/** Theme config. */
export type ThemeConfig = ReturnType<typeof extendTheme>;

/** Theme color mode. */
export const themeColorMode = {
  /** Light mode. */
  light: 'light',
  /** Dark mode. */
  dark: 'dark',
} as const;

/** Theme color mode type. */
export type ThemeColorMode = ValueOf<typeof themeColorMode>;
