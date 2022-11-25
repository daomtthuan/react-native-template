import { LocaleCode, LocaleResource, LocaleResourceNamespace } from '../locale.type';
import button from './button.json';
import common from './common.json';
import error from './error.json';
import label from './label.json';
import screen from './screen.json';
import validation from './validation.json';

const viLocaleResource: LocaleResource = {
  /** Vietnamese locale code. */
  code: LocaleCode.VI,
  /** Vietnamese display name. */
  displayName: 'Tiếng Việt',
  /** Vietnamese resource. */
  resource: {
    /** Vietnamese common resource. */
    [LocaleResourceNamespace.COMMON]: common,
    /** Vietnamese error resource. */
    [LocaleResourceNamespace.ERROR]: error,
    /** Vietnamese validation resource. */
    [LocaleResourceNamespace.VALIDATION]: validation,
    /** Vietnamese screen resource. */
    [LocaleResourceNamespace.SCREEN]: screen,
    /** Vietnamese label resource. */
    [LocaleResourceNamespace.LABEL]: label,
    /** Vietnamese button resource. */
    [LocaleResourceNamespace.BUTTON]: button,
  },
};

export default viLocaleResource;
