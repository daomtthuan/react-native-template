import { Button, Divider, Heading, HStack, Link, Text, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';

import { colorScheme } from '@/theme/color';

import { AboutScreenProps } from './AboutScreen.type';

/**
 * AboutScreen component.
 *
 * @returns The About screen component.
 */
function AboutScreen({ navigation }: AboutScreenProps) {
  const { t } = useTranslation();

  return (
    <VStack colorScheme={colorScheme.light} flex={1} justifyContent="center" alignItems="center" space={4} p={4}>
      <Heading>React Native template</Heading>
      <VStack width="full">
        <Text>{t('label:screen.default.about.instructions')}</Text>
        <HStack>
          <Text bold>{t('label:screen.default.about.author')}: </Text>
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

export default AboutScreen;
