import { FontAsset, FontConfig, FontFamily, fontName, fontStyle, fontType, fontWeight } from './font.type';

/** Font asset. */
const assets: FontAsset = {
  /** Font display. */
  [fontName.display]: {
    /** Font display weight thin. */
    [fontWeight.thin]: {
      /** Font display weight thin normal. */
      [fontStyle.normal]: 'MuseoModerno-Thin',
      /** Font display weight thin italic. */
      [fontStyle.italic]: 'MuseoModerno-ThinItalic',
    },
    /** Font display weight extra light. */
    [fontWeight.extraLight]: {
      /** Font display weight extra light normal. */
      [fontStyle.normal]: 'MuseoModerno-ExtraLight',
      /** Font display weight extra light italic. */
      [fontStyle.italic]: 'MuseoModerno-ExtraLightItalic',
    },
    /** Font display weight light. */
    [fontWeight.light]: {
      /** Font display weight light normal. */
      [fontStyle.normal]: 'MuseoModerno-Light',
      /** Font display weight light italic. */
      [fontStyle.italic]: 'MuseoModerno-LightItalic',
    },
    /** Font display weight normal. */
    [fontWeight.normal]: {
      /** Font display weight normal regular. */
      [fontStyle.normal]: 'MuseoModerno-Regular',
      /** Font display weight normal italic. */
      [fontStyle.italic]: 'MuseoModerno-Italic',
    },
    /** Font display weight medium. */
    [fontWeight.medium]: {
      /** Font display weight medium normal. */
      [fontStyle.normal]: 'MuseoModerno-Medium',
      /** Font display weight medium italic. */
      [fontStyle.italic]: 'MuseoModerno-MediumItalic',
    },
    /** Font display weight semi bold. */
    [fontWeight.semiBold]: {
      /** Font display weight semi bold normal. */
      [fontStyle.normal]: 'MuseoModerno-SemiBold',
      /** Font display weight semi bold italic. */
      [fontStyle.italic]: 'MuseoModerno-SemiBoldItalic',
    },
    /** Font display weight bold. */
    [fontWeight.bold]: {
      /** Font display weight bold normal. */
      [fontStyle.normal]: 'MuseoModerno-Bold',
      /** Font display weight bold italic. */
      [fontStyle.italic]: 'MuseoModerno-BoldItalic',
    },
    /** Font display weight extra bold. */
    [fontWeight.extraBold]: {
      /** Font display weight extra bold normal. */
      [fontStyle.normal]: 'MuseoModerno-ExtraBold',
      /** Font display weight extra bold italic. */
      [fontStyle.italic]: 'MuseoModerno-ExtraBoldItalic',
    },
    /** Font display weight black. */
    [fontWeight.black]: {
      /** Font display weight black normal. */
      [fontStyle.normal]: 'MuseoModerno-Black',
      /** Font display weight black italic. */
      [fontStyle.italic]: 'MuseoModerno-BlackItalic',
    },
  },

  /** Font mono. */
  [fontName.mono]: {
    /** Font mono weight thin. */
    [fontWeight.thin]: {
      /** Font mono weight thin normal. */
      [fontStyle.normal]: 'MuseoModerno-Thin',
      /** Font mono weight thin italic. */
      [fontStyle.italic]: 'MuseoModerno-ThinItalic',
    },
    /** Font mono weight extra light. */
    [fontWeight.extraLight]: {
      /** Font mono weight extra light normal. */
      [fontStyle.normal]: 'MuseoModerno-ExtraLight',
      /** Font mono weight extra light italic. */
      [fontStyle.italic]: 'MuseoModerno-ExtraLightItalic',
    },
    /** Font mono weight light. */
    [fontWeight.light]: {
      /** Font mono weight light normal. */
      [fontStyle.normal]: 'MuseoModerno-Light',
      /** Font mono weight light italic. */
      [fontStyle.italic]: 'MuseoModerno-LightItalic',
    },
    /** Font mono weight normal. */
    [fontWeight.normal]: {
      /** Font mono weight normal regular. */
      [fontStyle.normal]: 'MuseoModerno-Regular',
      /** Font mono weight normal italic. */
      [fontStyle.italic]: 'MuseoModerno-Italic',
    },
    /** Font mono weight medium. */
    [fontWeight.medium]: {
      /** Font mono weight medium normal. */
      [fontStyle.normal]: 'MuseoModerno-Medium',
      /** Font mono weight medium italic. */
      [fontStyle.italic]: 'MuseoModerno-MediumItalic',
    },
    /** Font mono weight semi bold. */
    [fontWeight.semiBold]: {
      /** Font mono weight semi bold normal. */
      [fontStyle.normal]: 'MuseoModerno-SemiBold',
      /** Font mono weight semi bold italic. */
      [fontStyle.italic]: 'MuseoModerno-SemiBoldItalic',
    },
    /** Font mono weight bold. */
    [fontWeight.bold]: {
      /** Font mono weight bold normal. */
      [fontStyle.normal]: 'MuseoModerno-Bold',
      /** Font mono weight bold italic. */
      [fontStyle.italic]: 'MuseoModerno-BoldItalic',
    },
    /** Font mono weight extra bold. */
    [fontWeight.extraBold]: {
      /** Font mono weight extra bold normal. */
      [fontStyle.normal]: 'MuseoModerno-ExtraBold',
      /** Font mono weight extra bold italic. */
      [fontStyle.italic]: 'MuseoModerno-ExtraBoldItalic',
    },
    /** Font mono weight black. */
    [fontWeight.black]: {
      /** Font mono weight black normal. */
      [fontStyle.normal]: 'MuseoModerno-Black',
      /** Font mono weight black italic. */
      [fontStyle.italic]: 'MuseoModerno-BlackItalic',
    },
  },

  /** Font sans. */
  [fontName.sans]: {
    /** Font sans weight thin. */
    [fontWeight.thin]: {
      /** Font sans weight thin normal. */
      [fontStyle.normal]: 'MuseoModerno-Thin',
      /** Font sans weight thin italic. */
      [fontStyle.italic]: 'MuseoModerno-ThinItalic',
    },
    /** Font sans weight extra light. */
    [fontWeight.extraLight]: {
      /** Font sans weight extra light normal. */
      [fontStyle.normal]: 'MuseoModerno-ExtraLight',
      /** Font sans weight extra light italic. */
      [fontStyle.italic]: 'MuseoModerno-ExtraLightItalic',
    },
    /** Font sans weight light. */
    [fontWeight.light]: {
      /** Font sans weight light normal. */
      [fontStyle.normal]: 'MuseoModerno-Light',
      /** Font sans weight light italic. */
      [fontStyle.italic]: 'MuseoModerno-LightItalic',
    },
    /** Font sans weight normal. */
    [fontWeight.normal]: {
      /** Font sans weight normal regular. */
      [fontStyle.normal]: 'MuseoModerno-Regular',
      /** Font sans weight normal italic. */
      [fontStyle.italic]: 'MuseoModerno-Italic',
    },
    /** Font sans weight medium. */
    [fontWeight.medium]: {
      /** Font sans weight medium normal. */
      [fontStyle.normal]: 'MuseoModerno-Medium',
      /** Font sans weight medium italic. */
      [fontStyle.italic]: 'MuseoModerno-MediumItalic',
    },
    /** Font sans weight semi bold. */
    [fontWeight.semiBold]: {
      /** Font sans weight semi bold normal. */
      [fontStyle.normal]: 'MuseoModerno-SemiBold',
      /** Font sans weight semi bold italic. */
      [fontStyle.italic]: 'MuseoModerno-SemiBoldItalic',
    },
    /** Font sans weight bold. */
    [fontWeight.bold]: {
      /** Font sans weight bold normal. */
      [fontStyle.normal]: 'MuseoModerno-Bold',
      /** Font sans weight bold italic. */
      [fontStyle.italic]: 'MuseoModerno-BoldItalic',
    },
    /** Font sans weight extra bold. */
    [fontWeight.extraBold]: {
      /** Font sans weight extra bold normal. */
      [fontStyle.normal]: 'MuseoModerno-ExtraBold',
      /** Font sans weight extra bold italic. */
      [fontStyle.italic]: 'MuseoModerno-ExtraBoldItalic',
    },
    /** Font sans weight black. */
    [fontWeight.black]: {
      /** Font sans weight black normal. */
      [fontStyle.normal]: 'MuseoModerno-Black',
      /** Font sans weight black italic. */
      [fontStyle.italic]: 'MuseoModerno-BlackItalic',
    },
  },
};

/** Font family. */
const fontFamily: FontFamily = {
  /** Font family display. */
  [fontType.display]: fontName.display,
  /** Font family mono. */
  [fontType.mono]: fontName.mono,
  /** Font family sans. */
  [fontType.sans]: fontName.sans,
};

/** Font config. */
const fontConfig: FontConfig = {
  assets,
  fontFamily,
};

export default fontConfig;
