import { Button, Divider, Heading, HStack, Link, Text, VStack } from 'native-base';

import { AboutScreenProps } from './AboutScreen.type';

/**
 * AboutScreen component.
 *
 * @returns The About screen component.
 */
export default function AboutScreen({ navigation }: AboutScreenProps) {
  return (
    <VStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      p={4}
      space={4}
      _light={{ backgroundColor: 'light.900' }}
      _dark={{ backgroundColor: 'dark.900' }}
    >
      <Heading>React Native template</Heading>
      <VStack width="full">
        <Text>React Native template with all setup</Text>
        <HStack>
          <Text bold>Author: </Text>
          <Text>Daomtthuan</Text>
        </HStack>
        <HStack>
          <Text bold>Github: </Text>
          <Link href="https://github.com/daomtthuan/react-native-template-all-setup">@daomtthuan/react-native-template-all-setup</Link>
        </HStack>
      </VStack>
      <Divider />
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </VStack>
  );
}
