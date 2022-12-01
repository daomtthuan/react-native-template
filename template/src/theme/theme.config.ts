import { extendTheme } from 'native-base';

import { colorConfig } from './color';
import themeComponentsConfig from './component';
import { fontConfig } from './font';
import { themeColorMode, ThemeConfig } from './theme.type';

const themeConfig: ThemeConfig = extendTheme({
  /** Config. */
  config: {
    /** Default color mode. */
    initialColorMode: themeColorMode.light,
  },

  /** Theme colors config. */
  colors: colorConfig,

  /** Theme fonts config. */
  fontConfig: fontConfig.assets,
  /** Theme fonts family config. */
  fonts: fontConfig.fontFamily,

  /** Theme components config. */
  components: themeComponentsConfig,
});

export default themeConfig;
