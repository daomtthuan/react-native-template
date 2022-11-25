import { extendTheme } from 'native-base';

import { colorConfig } from './color';
import { fontConfig } from './font';

const themeConfig = extendTheme({
  /** Config. */
  config: {
    initialColorMode: 'light',
  },

  /** Theme colors config. */
  colors: colorConfig,

  /** Theme fonts config. */
  fontConfig: fontConfig.assetMap,
  /** Theme fonts family config. */
  fonts: fontConfig.fontFamilyMap,

  /** Theme components config. */
});

export default themeConfig;
