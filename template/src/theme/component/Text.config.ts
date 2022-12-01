import { ITextProps } from 'native-base';

import { colorShade } from '../color';
import { getColorScheme, getColorValue } from '../helpers';

const themeTextConfig = {
  defaultProps: {
    colorScheme: 'dark',
  },
  baseStyle: (props: ITextProps) => {
    const scheme = getColorScheme(props.colorScheme?.toString());

    return {
      _light: {
        color: getColorValue({ scheme, shade: colorShade[900] }),
      },
      _dark: {
        color: getColorValue({ scheme, shade: colorShade[100] }),
      },
    };
  },
};

export default themeTextConfig;
