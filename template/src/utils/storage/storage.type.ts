/** App storage key. */
export enum AppStorage {
  /** First times launch app key. */
  FIRST_TIMES_LAUNCH = 'app:firstTimesLaunch',
}

/** I18n storage key. */
export enum I18nStorage {
  /** Language key. */
  LANGUAGE = 'i18n:language',
}

/** Theme storage key. */
export enum ThemeStorage {
  /** Mode key. */
  MODE = 'theme:mode',
}

export type StorageKey = AppStorage | I18nStorage | ThemeStorage;
