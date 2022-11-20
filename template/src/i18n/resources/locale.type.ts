import { JsonObject } from 'type-fest';

/** Locale code. */
export enum LocaleCode {
  /** English code. */
  EN = 'en',
  /** Vietnamese code. */
  VI = 'vi',
}

/** Locale display names. */
export type LocaleDisplayNames = Record<LocaleCode, string>;

/** Resource namespace. */
export enum LocaleResourceNamespace {
  /** Common resource namespace. */
  COMMON = 'common',
  /** Error resource namespace. */
  ERROR = 'error',
  /** Validation resource namespace. */
  VALIDATION = 'validation',
  /** Screen resource namespace. */
  SCREEN = 'screen',
  /** Label resource namespace. */
  LABEL = 'label',
  /** Button resource namespace. */
  BUTTON = 'button',
}

/** Locale resource. */
export type LocaleResource = {
  code: LocaleCode;
  displayName: string;
  resource: Record<LocaleResourceNamespace, JsonObject>;
};

/** Locale resources. */
export type LocaleResources = Record<LocaleCode, LocaleResource['resource']>;
