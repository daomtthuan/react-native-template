import { Button, Divider, Heading, HStack, VStack } from 'native-base';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { colorScheme } from '@/theme/color';

import { WelcomeScreenProps } from './WelcomeScreen.type';

/**
 * WelcomeScreen component.
 *
 * @returns The Welcome screen component.
 */
function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const { i18n, t } = useTranslation();

  const language = useMemo(() => (i18n.language === 'en' ? 'vi' : 'en'), [i18n.language]);

  const changeLanguage = useCallback(() => {
    i18n.changeLanguage(language).catch(() => {});
  }, [i18n, language]);

  const goToAbout = useCallback(() => {
    navigation.push('About');
  }, [navigation]);

  return (
    <VStack colorScheme={colorScheme.light} flex={1} justifyContent="center" alignItems="center" space={4} p={4}>
      <Heading>{t('label:screen.default.welcome.greetings')}</Heading>
      <Divider />
      <HStack space={4}>
        <Button colorScheme={colorScheme.light} onPress={changeLanguage}>
          {`${t('button:screen.default.welcome.changeLanguage')} ${language.toUpperCase()}`}
        </Button>
        <Button onPress={goToAbout}>{t('button:screen.default.welcome.about')}</Button>
      </HStack>
    </VStack>
  );
}

export default WelcomeScreen;
