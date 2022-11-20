/** Color variant. */
export enum ColorVariant {
  /** Primary color. */
  PRIMARY = 'primary',
  /** Secondary color. */
  SECONDARY = 'secondary',
  /** Danger color. */
  DANGER = 'danger',
  /** Success color. */
  SUCCESS = 'success',
  /** Warning color. */
  WARING = 'warning',
  /** Info color. */
  INFO = 'info',
  /** Light color. */
  LIGHT = 'light',
  /** Dark color. */
  DARK = 'dark',
  /** Muted color. */
  MUTED = 'muted',
}

/** Color shade. */
export enum ColorShade {
  /** Color shade 50. */
  $50 = '50',
  /** Color shade 100. */
  $100 = '100',
  /** Color shade 200. */
  $200 = '200',
  /** Color shade 300. */
  $300 = '300',
  /** Color shade 400. */
  $400 = '400',
  /** Color shade 500. */
  $500 = '500',
  /** Color shade 600. */
  $600 = '600',
  /** Color shade 700. */
  $700 = '700',
  /** Color shade 800. */
  $800 = '800',
  /** Color shade 900. */
  $900 = '900',
}

/** Color config. */
export type ColorConfig = Record<ColorVariant, Record<ColorShade, string>>;

/** Color value. */
export type ColorValue = Record<ColorShade, string>;

/** Color values. */
export type ColorValues = Record<ColorVariant, ColorValue>;
