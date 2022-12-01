import { IStackProps } from 'native-base';

import { colorScheme, colorShade, colorValues } from '../color';
import { getColorScheme, getColorValue } from '../helpers';

const themeStackConfig = {
  baseStyle: (props: IStackProps) => {
    if (!props.colorScheme) {
      return {};
    }

    const scheme = getColorScheme(props.colorScheme.toString());

    if (scheme === colorScheme.light) {
      return {
        _light: {
          backgroundColor: colorValues.light[100],
        },
        _dark: {
          backgroundColor: colorValues.dark[900],
        },
      };
    }

    return {
      _light: {
        backgroundColor: getColorValue({ scheme, shade: colorShade[100] }),
      },
      _dark: {
        backgroundColor: getColorValue({ scheme, shade: colorShade[800] }),
      },
    };
  },
};

export default themeStackConfig;
