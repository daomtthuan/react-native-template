import { NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { appErrorCode } from '@/common/error';
import { useStatusChecker } from '@/common/hook';
import { useI18n } from '@/i18n';
import { ErrorScreen } from '@/screens/SharedScreens';
import { themeConfig } from '@/theme';
import { useLogger } from '@/utils/logger';

import { Navigation } from '../Navigation';

/**
 * App component.
 *
 * @returns The App component.
 */
function App() {
  /** Logger. */
  const loggerStatus = useLogger();
  /** I18n. */
  const i18nStatus = useI18n();

  /** Status checker. */
  const statusChecker = useStatusChecker([loggerStatus, i18nStatus]);

  useEffect(() => {
    // Hide splash screen after all modules are ready
    if (!statusChecker.isPending()) {
      SplashScreen.hide();
    }
  }, [statusChecker]);

  return (
    <NativeBaseProvider theme={themeConfig}>
      {statusChecker.isError() && <ErrorScreen code={appErrorCode.init.e000000} />}
      {statusChecker.isSuccess() && <Navigation />}
    </NativeBaseProvider>
  );
}

export default App;
