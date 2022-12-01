import { Spinner, Stack, Text } from 'native-base';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { colorScheme } from '@/theme/color';

import { LoadingProps } from './Loading.type';

/**
 * Loading component.
 *
 * @returns The Loading component.
 */
function Loading({ spinnerColorScheme = colorScheme.primary, textColorScheme, showMessage, inline = false }: LoadingProps) {
  const [dot, setDot] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    // Create a timer to update the dot every 1000ms
    const interval = setInterval(() => {
      if (dot.length === 3) {
        setDot('');
      } else {
        setDot(`${dot}.`);
      }
    }, 1000);

    // Clear the timer when unmounted
    return () => {
      clearInterval(interval);
    };
  }, [dot]);

  return (
    <Stack flex={1} justifyContent="center" alignItems="center" direction={inline ? 'row' : 'column'}>
      <Spinner colorScheme={spinnerColorScheme} />
      {showMessage && (
        <Text colorScheme={textColorScheme}>
          {t('label:component.loading.message')}
          {dot}
        </Text>
      )}
    </Stack>
  );
}

export default Loading;
