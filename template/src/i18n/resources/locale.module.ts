import en from './en';
import { LocaleCode, LocaleDisplayNames, LocaleResources } from './locale.type';
import vi from './vi';

/** Locale resources. */
export const localeResources: LocaleResources = {
  [LocaleCode.EN]: en.resource,
  [LocaleCode.VI]: vi.resource,
};

/** Locale display name. */
export const localeDisplayNames: LocaleDisplayNames = {
  [LocaleCode.EN]: en.displayName,
  [LocaleCode.VI]: vi.displayName,
};
