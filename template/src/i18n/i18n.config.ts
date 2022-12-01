import { I18nConfig } from './i18n.type';
import { localeCode, localeResourceNamespace, localeResources } from './resources';

/** I18n configs. */
const i18nConfig: I18nConfig = {
  defaultLocale: localeCode.vi,
  namespaces: Object.values(localeResourceNamespace),
  defaultNamespace: localeResourceNamespace.common,
  resources: localeResources,
};

export default i18nConfig;
