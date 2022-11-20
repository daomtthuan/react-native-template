import { Divider, Heading, HStack, Text, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';

import { ErrorScreenProps } from './ErrorScreen.type';

/**
 * ErrorScreen component.
 *
 * @returns The Error screen component.
 */
export default function ErrorScreen({ code }: ErrorScreenProps) {
  const { t } = useTranslation();

  return (
    <VStack flex={1} justifyContent="center" alignItems="center" safeArea>
      <Heading variant="danger">{t('error')}!</Heading>
      <Divider />
      <HStack>
        <Text bold>{t('errorCode')}: </Text>
        <Text>{code}</Text>
      </HStack>
      <HStack>
        <Text bold>{t('errorCode')}: </Text>
        <Text>{t(`error:${code}`)}</Text>
      </HStack>
    </VStack>
  );
}
