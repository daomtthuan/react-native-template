import { VStack } from 'native-base';

import { Loading } from '@/components/Loading';

/**
 * LoadingScreen component.
 *
 * @returns The Loading screen component.
 */
export default function LoadingScreen() {
  return (
    <VStack flex={1} justifyContent="center" alignItems="center" safeArea>
      <Loading />
    </VStack>
  );
}
