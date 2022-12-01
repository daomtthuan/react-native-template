import { ValueOf } from 'type-fest';

/** Font name. */
export const fontName = {
  /** Font display. */
  display: 'MuseoModerno',
  /** Font mono. */
  mono: 'CascadiaCode',
  /** Font sans. */
  sans: 'Nunito',
};

/** Font name type. */
export type FontName = ValueOf<typeof fontName>;

/** Font type. */
export const fontType = {
  /** Font display. */
  display: 'display',
  /** Font mono. */
  mono: 'mono',
  /** Font sans. */
  sans: 'sans',
} as const;

/** Font type type. */
export type FontType = ValueOf<typeof fontType>;

/** Font weight. */
export const fontWeight = {
  /** Font weight thin. */
  thin: '100',
  /** Font weight extra light. */
  extraLight: '200',
  /** Font weight light. */
  light: '300',
  /** Font weight normal. */
  normal: '400',
  /** Font weight medium. */
  medium: '500',
  /** Font weight semi bold. */
  semiBold: '600',
  /** Font weight bold. */
  bold: '700',
  /** Font weight extra bold. */
  extraBold: '800',
  /** Font weight black. */
  black: '900',
} as const;

/** Font weight type. */
export type FontWeight = ValueOf<typeof fontWeight>;

/** Font style. */
export const fontStyle = {
  /** Font style normal. */
  normal: 'normal',
  /** Font style italic. */
  italic: 'italic',
};

/** Font style type. */
export type FontStyle = ValueOf<typeof fontStyle>;

/** Font asset. */
export type FontAsset = Record<FontName, Record<FontWeight, Record<FontStyle, string>>>;

/** Font family. */
export type FontFamily = Record<FontType, FontName>;

/** Font config. */
export type FontConfig = {
  /** Font asset. */
  assets: FontAsset;
  /** Font family. */
  fontFamily: FontFamily;
};
