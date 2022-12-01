import { ISpinnerProps } from 'native-base';

import { colorScheme, colorShade } from '../color';
import { getColorScheme, getColorValue } from '../helpers';

const themeSpinnerConfig = {
  defaultProps: {
    colorScheme: colorScheme.primary,
  },
  baseStyle: (props: ISpinnerProps) => {
    const scheme = getColorScheme(props.colorScheme?.toString(), colorScheme.primary);

    return {
      _light: {
        color: getColorValue({ scheme, shade: colorShade[500] }),
      },
      _dark: {
        color: getColorValue({ scheme, shade: colorShade[300] }),
      },
    };
  },
};

export default themeSpinnerConfig;
