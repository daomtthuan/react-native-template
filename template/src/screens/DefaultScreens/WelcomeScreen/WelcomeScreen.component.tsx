import { Button, Divider, Heading, HStack, useColorMode, VStack } from 'native-base';

import { WelcomeScreenProps } from './WelcomeScreen.type';

/**
 * WelcomeScreen component.
 *
 * @returns The Welcome screen component.
 */
export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const { toggleColorMode } = useColorMode();

  return (
    <VStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      p={4}
      space={4}
      _light={{ backgroundColor: 'light.900' }}
      _dark={{ backgroundColor: 'dark.900' }}>
      <Heading>Hello React Native!</Heading>
      <Divider />
      <HStack space={4}>
        <Button onPress={toggleColorMode}>Toggle theme</Button>
        <Button onPress={() => navigation.push('About')}>Go to About</Button>
      </HStack>
    </VStack>
  );
}
