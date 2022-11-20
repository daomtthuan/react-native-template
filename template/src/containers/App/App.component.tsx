import { NativeBaseProvider } from 'native-base';
import { useEffect, useMemo } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';

import { AppErrorCode } from '@/common/error';
import { statusChecker } from '@/common/hook';
import { useI18n } from '@/i18n';
import { DefaultRouter } from '@/routers/DefaultRouter';
import { ErrorScreen } from '@/screens/SharedScreens';
import { themeConfig } from '@/theme';
import { useLogger } from '@/utils/logger';

/**
 * App component.
 *
 * @returns The App component.
 */
export default function App() {
  const loggerStatus = useLogger();
  const i18nStatus = useI18n();

  const statuses = useMemo(() => [loggerStatus, i18nStatus], [loggerStatus, i18nStatus]);

  useEffect(() => {
    if (statusChecker.isReady(statuses)) {
      SplashScreen.hide();
    }
  }, [statuses]);

  return (
    <NativeBaseProvider theme={themeConfig}>
      {statusChecker.isError(statuses) ? (
        <ErrorScreen code={AppErrorCode.INIT_000000} />
      ) : (
        <NavigationContainer>
          <DefaultRouter />
        </NavigationContainer>
      )}
    </NativeBaseProvider>
  );
}
