import { localeCode, LocaleResource, localeResourceNamespace } from '../locale.type';
import button from './button.json';
import common from './common.json';
import error from './error.json';
import label from './label.json';
import screen from './screen.json';
import validation from './validation.json';

/** Locale resources. */
const enLocaleResource: LocaleResource = {
  /** English locale code. */
  code: localeCode.en,
  /** English display name. */
  displayName: 'English',
  /** English resource. */
  resource: {
    /** English common resource. */
    [localeResourceNamespace.common]: common,
    /** English error resource. */
    [localeResourceNamespace.error]: error,
    /** English validation resource. */
    [localeResourceNamespace.validation]: validation,
    /** English screen resource. */
    [localeResourceNamespace.screen]: screen,
    /** English label resource. */
    [localeResourceNamespace.label]: label,
    /** English button resource. */
    [localeResourceNamespace.button]: button,
  },
};

export default enLocaleResource;
