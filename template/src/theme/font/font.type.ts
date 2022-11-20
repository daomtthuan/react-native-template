/** Font name. */
export enum FontName {
  /** Font display. */
  DISPLAY = 'MuseoModerno',
  /** Font mono. */
  MONO = 'CascadiaCode',
  /** Font sans. */
  SANS = 'Nunito',
}

/** Font type. */
export enum FontType {
  /** Font display. */
  DISPLAY = 'display',
  /** Font mono. */
  MONO = 'mono',
  /** Font sans. */
  SANS = 'sans',
}

/** Font weight. */
export enum FontWeight {
  /** Font weight thin. */
  THIN = '100',
  /** Font weight extra light. */
  EXTRA_LIGHT = '200',
  /** Font weight light. */
  LIGHT = '300',
  /** Font weight normal. */
  NORMAL = '400',
  /** Font weight medium. */
  MEDIUM = '500',
  /** Font weight semi bold. */
  SEMI_BOLD = '600',
  /** Font weight bold. */
  BOLD = '700',
  /** Font weight extra bold. */
  EXTRA_BOLD = '800',
  /** Font weight black. */
  BLACK = '900',
}

/** Font style. */
export enum FontStyle {
  /** Font style normal. */
  NORMAL = 'normal',
  /** Font style italic. */
  ITALIC = 'italic',
}

/** Font asset map config. */
export type FontAssetMap = Record<FontName, Record<FontWeight, Record<FontStyle, string>>>;

/** Font family map. */
export type FontFamilyMap = Record<FontType, FontName>;

/** Font config. */
export type FontConfig = {
  /** Font asset map. */
  assetMap: FontAssetMap;
  /** Font family map. */
  fontFamilyMap: FontFamilyMap;
};
