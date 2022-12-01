import _ from 'lodash';
import { IButtonProps } from 'native-base';

import { colorScheme, colorShade, colorValues } from '../color';
import { darkenColor, getColorScheme, getColorValue, lightenColor } from '../helpers';

const themeButtonConfig = {
  defaultProps: {
    colorScheme: colorScheme.primary,
  },
  baseStyle: (props: IButtonProps) => {
    const scheme = getColorScheme(props.colorScheme?.toString(), colorScheme.primary);

    /** Text color. */
    const text = {
      color: scheme === colorScheme.light ? colorValues.dark[900] : colorValues.light[900],
    };

    /** Background color. */
    const backgroundColor = {
      light: getColorValue({ scheme, shade: colorShade[500] }),
      dark: getColorValue({ scheme, shade: colorShade[700] }),
    };

    /** Background color. */
    const background = {
      _light: {
        backgroundColor: backgroundColor.light,
      },
      _dark: {
        backgroundColor: backgroundColor.dark,
      },
      _hover: {
        _light: {
          backgroundColor: lightenColor(backgroundColor.light, 100), // Lighten 100: light.800 -> light.900
        },
        _dark: {
          backgroundColor: lightenColor(backgroundColor.dark, 100), // Lighten 100: dark.800 -> dark.700
        },
      },
      _pressed: {
        _light: {
          backgroundColor: darkenColor(backgroundColor.light, 100), // Darken 100: light.800 -> light.700
        },
        _dark: {
          backgroundColor: darkenColor(backgroundColor.dark, 100), // Darken 100: dark.800 -> dark.900
        },
      },
    };

    return _.merge(text, background);
  },
};

export default themeButtonConfig;
