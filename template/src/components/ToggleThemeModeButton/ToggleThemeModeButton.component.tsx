import { Button, useColorMode, useColorModeValue } from 'native-base';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

/**
 * ToggleThemeModeButton component.
 *
 * @returns The Toggle theme mode button component.
 */
export default function ToggleThemeModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  const colors = {
    background: useColorModeValue('primary.500', 'primary.600') as string,
    hoverBackground: useColorModeValue('primary.400', 'primary.500') as string,
    pressedBackground: useColorModeValue('primary.600', 'primary.700') as string,
    text: useColorModeValue('light.10', 'light.10') as string,
  };

  return (
    <Button
      onPress={toggleColorMode}
      backgroundColor={colors.background}
      _hover={{ backgroundColor: colors.hoverBackground }}
      _pressed={{ backgroundColor: colors.pressedBackground }}>
      <FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun} color={colors.text} />
    </Button>
  );
}
