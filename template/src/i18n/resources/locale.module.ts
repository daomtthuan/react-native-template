import en from './en';
import { localeCode, LocaleDisplayNames, LocaleResources } from './locale.type';
import vi from './vi';

/** Locale resources. */
export const localeResources: LocaleResources = {
  [localeCode.en]: en.resource,
  [localeCode.vi]: vi.resource,
};

/** Locale display name. */
export const localeDisplayNames: LocaleDisplayNames = {
  [localeCode.en]: en.displayName,
  [localeCode.vi]: vi.displayName,
};
