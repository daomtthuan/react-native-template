import { JsonObject, ValueOf } from 'type-fest';

/** Locale code. */
export const localeCode = {
  /** English code. */
  en: 'en',
  /** Vietnamese code. */
  vi: 'vi',
} as const;

/** Locale code type. */
export type LocaleCode = ValueOf<typeof localeCode>;

/** Locale display names. */
export type LocaleDisplayNames = Record<LocaleCode, string>;

/** Resource namespace. */
export const localeResourceNamespace = {
  /** Common resource namespace. */
  common: 'common',
  /** Error resource namespace. */
  error: 'error',
  /** Validation resource namespace. */
  validation: 'validation',
  /** Screen resource namespace. */
  screen: 'screen',
  /** Label resource namespace. */
  label: 'label',
  /** Button resource namespace. */
  button: 'button',
} as const;

/** Resource namespace type. */
export type LocaleResourceNamespace = ValueOf<typeof localeResourceNamespace>;

/** Locale resource. */
export type LocaleResource = {
  code: LocaleCode;
  displayName: string;
  resource: Record<LocaleResourceNamespace, JsonObject>;
};

/** Locale resources. */
export type LocaleResources = Record<LocaleCode, LocaleResource['resource']>;
