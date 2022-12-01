import { ValueOf } from 'type-fest';

/** Theme storage key. */
export const themeStorage = {
  /** Mode key. */
  mode: 'theme:mode',
} as const;

/** Theme storage key type. */
export type ThemeStorage = ValueOf<typeof themeStorage>;
