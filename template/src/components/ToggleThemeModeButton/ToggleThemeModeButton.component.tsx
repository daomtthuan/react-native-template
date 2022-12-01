import { Button, useColorMode, useTheme } from 'native-base';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

/**
 * ToggleThemeModeButton component.
 *
 * @returns The Toggle theme mode button component.
 */
function ToggleThemeModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colors } = useTheme();

  return (
    <Button onPress={toggleColorMode} mr={4}>
      <FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun} color={colors.light[100]} />
    </Button>
  );
}

export default ToggleThemeModeButton;
