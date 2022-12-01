import { localeCode, LocaleResource, localeResourceNamespace } from '../locale.type';
import button from './button.json';
import common from './common.json';
import error from './error.json';
import label from './label.json';
import screen from './screen.json';
import validation from './validation.json';

const viLocaleResource: LocaleResource = {
  /** Vietnamese locale code. */
  code: localeCode.vi,
  /** Vietnamese display name. */
  displayName: 'Tiếng Việt',
  /** Vietnamese resource. */
  resource: {
    /** Vietnamese common resource. */
    [localeResourceNamespace.common]: common,
    /** Vietnamese error resource. */
    [localeResourceNamespace.error]: error,
    /** Vietnamese validation resource. */
    [localeResourceNamespace.validation]: validation,
    /** Vietnamese screen resource. */
    [localeResourceNamespace.screen]: screen,
    /** Vietnamese label resource. */
    [localeResourceNamespace.label]: label,
    /** Vietnamese button resource. */
    [localeResourceNamespace.button]: button,
  },
};

export default viLocaleResource;
