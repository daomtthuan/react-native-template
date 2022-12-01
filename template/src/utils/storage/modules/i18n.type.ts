import { ValueOf } from 'type-fest';

/** I18n storage key. */
export const i18nStorage = {
  /** Language key. */
  language: 'i18n:language',
} as const;

/** I18n storage key type. */
export type I18nStorage = ValueOf<typeof i18nStorage>;
