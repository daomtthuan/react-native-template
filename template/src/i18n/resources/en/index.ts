import { LocaleCode, LocaleResource, LocaleResourceNamespace } from '../locale.type';
import button from './button.json';
import common from './common.json';
import error from './error.json';
import label from './label.json';
import screen from './screen.json';
import validation from './validation.json';

export default {
  /** English locale code. */
  code: LocaleCode.EN,
  /** English display name. */
  displayName: 'English',
  /** English resource. */
  resource: {
    /** English common resource. */
    [LocaleResourceNamespace.COMMON]: common,
    /** English error resource. */
    [LocaleResourceNamespace.ERROR]: error,
    /** English validation resource. */
    [LocaleResourceNamespace.VALIDATION]: validation,
    /** English screen resource. */
    [LocaleResourceNamespace.SCREEN]: screen,
    /** English label resource. */
    [LocaleResourceNamespace.LABEL]: label,
    /** English button resource. */
    [LocaleResourceNamespace.BUTTON]: button,
  },
} as LocaleResource;
