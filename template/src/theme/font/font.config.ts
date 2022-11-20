import { FontAssetMap, FontConfig, FontFamilyMap, FontName, FontStyle, FontType, FontWeight } from './font.type';

const assetMap: FontAssetMap = {
  /** Font display. */
  [FontName.DISPLAY]: {
    /** Font display weight thin. */
    [FontWeight.THIN]: {
      /** Font display weight thin normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Thin',
      /** Font display weight thin italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-ThinItalic',
    },
    /** Font display weight extra light. */
    [FontWeight.EXTRA_LIGHT]: {
      /** Font display weight extra light normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-ExtraLight',
      /** Font display weight extra light italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-ExtraLightItalic',
    },
    /** Font display weight light. */
    [FontWeight.LIGHT]: {
      /** Font display weight light normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Light',
      /** Font display weight light italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-LightItalic',
    },
    /** Font display weight normal. */
    [FontWeight.NORMAL]: {
      /** Font display weight normal regular. */
      [FontStyle.NORMAL]: 'MuseoModerno-Regular',
      /** Font display weight normal italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-Italic',
    },
    /** Font display weight medium. */
    [FontWeight.MEDIUM]: {
      /** Font display weight medium normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Medium',
      /** Font display weight medium italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-MediumItalic',
    },
    /** Font display weight semi bold. */
    [FontWeight.SEMI_BOLD]: {
      /** Font display weight semi bold normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-SemiBold',
      /** Font display weight semi bold italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-SemiBoldItalic',
    },
    /** Font display weight bold. */
    [FontWeight.BOLD]: {
      /** Font display weight bold normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Bold',
      /** Font display weight bold italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-BoldItalic',
    },
    /** Font display weight extra bold. */
    [FontWeight.EXTRA_BOLD]: {
      /** Font display weight extra bold normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-ExtraBold',
      /** Font display weight extra bold italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-ExtraBoldItalic',
    },
    /** Font display weight black. */
    [FontWeight.BLACK]: {
      /** Font display weight black normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Black',
      /** Font display weight black italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-BlackItalic',
    },
  },

  /** Font mono. */
  [FontName.MONO]: {
    /** Font mono weight thin. */
    [FontWeight.THIN]: {
      /** Font mono weight thin normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Thin',
      /** Font mono weight thin italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-ThinItalic',
    },
    /** Font mono weight extra light. */
    [FontWeight.EXTRA_LIGHT]: {
      /** Font mono weight extra light normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-ExtraLight',
      /** Font mono weight extra light italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-ExtraLightItalic',
    },
    /** Font mono weight light. */
    [FontWeight.LIGHT]: {
      /** Font mono weight light normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Light',
      /** Font mono weight light italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-LightItalic',
    },
    /** Font mono weight normal. */
    [FontWeight.NORMAL]: {
      /** Font mono weight normal regular. */
      [FontStyle.NORMAL]: 'MuseoModerno-Regular',
      /** Font mono weight normal italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-Italic',
    },
    /** Font mono weight medium. */
    [FontWeight.MEDIUM]: {
      /** Font mono weight medium normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Medium',
      /** Font mono weight medium italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-MediumItalic',
    },
    /** Font mono weight semi bold. */
    [FontWeight.SEMI_BOLD]: {
      /** Font mono weight semi bold normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-SemiBold',
      /** Font mono weight semi bold italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-SemiBoldItalic',
    },
    /** Font mono weight bold. */
    [FontWeight.BOLD]: {
      /** Font mono weight bold normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Bold',
      /** Font mono weight bold italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-BoldItalic',
    },
    /** Font mono weight extra bold. */
    [FontWeight.EXTRA_BOLD]: {
      /** Font mono weight extra bold normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-ExtraBold',
      /** Font mono weight extra bold italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-ExtraBoldItalic',
    },
    /** Font mono weight black. */
    [FontWeight.BLACK]: {
      /** Font mono weight black normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Black',
      /** Font mono weight black italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-BlackItalic',
    },
  },

  /** Font sans. */
  [FontName.SANS]: {
    /** Font sans weight thin. */
    [FontWeight.THIN]: {
      /** Font sans weight thin normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Thin',
      /** Font sans weight thin italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-ThinItalic',
    },
    /** Font sans weight extra light. */
    [FontWeight.EXTRA_LIGHT]: {
      /** Font sans weight extra light normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-ExtraLight',
      /** Font sans weight extra light italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-ExtraLightItalic',
    },
    /** Font sans weight light. */
    [FontWeight.LIGHT]: {
      /** Font sans weight light normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Light',
      /** Font sans weight light italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-LightItalic',
    },
    /** Font sans weight normal. */
    [FontWeight.NORMAL]: {
      /** Font sans weight normal regular. */
      [FontStyle.NORMAL]: 'MuseoModerno-Regular',
      /** Font sans weight normal italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-Italic',
    },
    /** Font sans weight medium. */
    [FontWeight.MEDIUM]: {
      /** Font sans weight medium normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Medium',
      /** Font sans weight medium italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-MediumItalic',
    },
    /** Font sans weight semi bold. */
    [FontWeight.SEMI_BOLD]: {
      /** Font sans weight semi bold normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-SemiBold',
      /** Font sans weight semi bold italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-SemiBoldItalic',
    },
    /** Font sans weight bold. */
    [FontWeight.BOLD]: {
      /** Font sans weight bold normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Bold',
      /** Font sans weight bold italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-BoldItalic',
    },
    /** Font sans weight extra bold. */
    [FontWeight.EXTRA_BOLD]: {
      /** Font sans weight extra bold normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-ExtraBold',
      /** Font sans weight extra bold italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-ExtraBoldItalic',
    },
    /** Font sans weight black. */
    [FontWeight.BLACK]: {
      /** Font sans weight black normal. */
      [FontStyle.NORMAL]: 'MuseoModerno-Black',
      /** Font sans weight black italic. */
      [FontStyle.ITALIC]: 'MuseoModerno-BlackItalic',
    },
  },
};

const fontFamilyMap: FontFamilyMap = {
  /** Font family display. */
  [FontType.DISPLAY]: FontName.DISPLAY,
  /** Font family mono. */
  [FontType.MONO]: FontName.MONO,
  /** Font family sans. */
  [FontType.SANS]: FontName.SANS,
};

export default {
  assetMap,
  fontFamilyMap,
} as FontConfig;
