import { Spinner, Stack, Text, useColorModeValue } from 'native-base';
import { useTranslation } from 'react-i18next';

import { colorValues } from '@/theme/color';

import { LoadingProps } from './Loading.type';

/**
 * Loading component.
 *
 * @returns The Loading component.
 */
function Loading(props: LoadingProps) {
  const defaultSpinnerColor = useColorModeValue(colorValues.primary[500], colorValues.primary[300]) as string;
  const defaultTextColor = useColorModeValue(colorValues.dark[900], colorValues.light[900]) as string;

  const { spinnerColor = defaultSpinnerColor, textColor = defaultTextColor, showMessage, inline = false } = props;

  const { t } = useTranslation();

  return (
    <Stack flex={1} justifyContent="center" alignItems="center" direction={inline ? 'row' : 'column'}>
      <Spinner color={spinnerColor} />
      {showMessage && <Text color={textColor}>{t('loading')}</Text>}
    </Stack>
  );
}

export default Loading;
