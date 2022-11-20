import { extendTheme } from 'native-base';

import { colorConfig } from './color';
import { fontConfig } from './font';

export default extendTheme({
  /** Theme config. */
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
