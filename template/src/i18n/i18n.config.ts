import { I18nConfig } from './i18n.type';
import { LocaleCode, LocaleResourceNamespace, localeResources } from './resources';

/** I18n configs. */
const i18nConfig: I18nConfig = {
  defaultLocale: LocaleCode.VI,
  namespaces: Object.values(LocaleResourceNamespace),
  defaultNamespace: LocaleResourceNamespace.COMMON,
  resources: localeResources,
};

export default i18nConfig;
