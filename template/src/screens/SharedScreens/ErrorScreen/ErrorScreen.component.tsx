import { Divider, Heading, HStack, Text, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';

import { colorScheme } from '@/theme/color';

import { ErrorScreenProps } from './ErrorScreen.type';

/**
 * ErrorScreen component.
 *
 * @returns The Error screen component.
 */
function ErrorScreen({ code }: ErrorScreenProps) {
  const { t } = useTranslation();

  return (
    <VStack colorScheme={colorScheme.light} flex={1} justifyContent="center" alignItems="center" safeArea>
      <Heading variant="danger">{t('screen:shared.error.title')}!</Heading>
      <Divider />
      <HStack>
        <Text bold>{t('label:screen.shared.error.code')}: </Text>
        <Text>{code}</Text>
      </HStack>
      <VStack>
        <Text bold>{t('label:screen.shared.error.message')}: </Text>
        <Text>{t(`error:${code}`, { defaultValue: t('error:unknown') as unknown })}</Text>
      </VStack>
    </VStack>
  );
}

export default ErrorScreen;
