import { Button, useColorMode } from 'native-base';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import useColors from './ToggleThemeModeButton.hook';

/**
 * ToggleThemeModeButton component.
 *
 * @returns The Toggle theme mode button component.
 */
function ToggleThemeModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  const colors = useColors();

  return (
    <Button
      onPress={toggleColorMode}
      backgroundColor={colors.background}
      _hover={{ backgroundColor: colors.hoverBackground }}
      _pressed={{ backgroundColor: colors.pressedBackground }}
      mr={4}
    >
      <FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun} color={colors.text} />
    </Button>
  );
}

export default ToggleThemeModeButton;
