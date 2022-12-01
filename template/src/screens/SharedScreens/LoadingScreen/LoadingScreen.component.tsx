import { VStack } from 'native-base';

import { Loading } from '@/components/Loading';
import { colorScheme } from '@/theme/color';

/**
 * LoadingScreen component.
 *
 * @returns The Loading screen component.
 */
function LoadingScreen() {
  return (
    <VStack colorScheme={colorScheme.light} flex={1} justifyContent="center" alignItems="center" safeArea>
      <Loading />
    </VStack>
  );
}

export default LoadingScreen;
