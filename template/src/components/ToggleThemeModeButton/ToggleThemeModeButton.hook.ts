import { useColorModeValue } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';
import { useMemo } from 'react';

/**
 * Create ToggleThemeModeButton color mode values.
 *
 * @returns The color mode values.
 */
function useColors() {
  /** Background color. */
  const background = useColorModeValue('primary.500', 'primary.600') as ColorType;
  /** Background color when hovered. */
  const hoverBackground = useColorModeValue('primary.400', 'primary.500') as ColorType;
  /** Background color when pressed. */
  const pressedBackground = useColorModeValue('primary.600', 'primary.700') as ColorType;

  /** Color mode values. */
  const colors = useMemo(
    () => ({
      background,
      hoverBackground,
      pressedBackground,
      text: '#fff',
    }),
    [background, hoverBackground, pressedBackground],
  );

  return colors;
}

export default useColors;
