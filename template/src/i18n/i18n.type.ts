import { LocaleCode, LocaleResourceNamespace, LocaleResources } from './resources';

/** I18n config. */
export type I18nConfig = {
  /** Default locale code. */
  defaultLocale: LocaleCode;
  /** Locale resource namespaces. */
  namespaces: LocaleResourceNamespace[];
  /** Default locale resource namespace. */
  defaultNamespace: LocaleResourceNamespace;
  /** Locale resources. */
  resources: LocaleResources;
};
