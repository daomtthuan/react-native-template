import { I18nConfig } from './i18n.type';
import { LocaleCode, LocaleResourceNamespace, localeResources } from './resources';

/** I18n configs. */
export default {
  defaultLocale: LocaleCode.VI,
  namespaces: Object.values(LocaleResourceNamespace),
  defaultNamespace: LocaleResourceNamespace.COMMON,
  resources: localeResources,
} as I18nConfig;
