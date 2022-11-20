import { useCallback } from 'react';
import { FileLogger } from 'react-native-file-logger';
import { useAsync } from 'react-util-hooks';

import { executeActionAsync } from '@/common/logic';

import loggerConfig from './logger.config';

/**
 * Init logger.
 *
 * @returns The logger status.
 */
export default function useLogger() {
  /** Init logger. */
  const initLogger = useCallback(async () => {
    await executeActionAsync(
      async () => {
        await FileLogger.configure(loggerConfig);

        if (__DEV__) {
          await FileLogger.deleteLogFiles();
        }
      },
      { errorMessage: "Couldn't init logger." },
    );
  }, []);

  const { status } = useAsync(initLogger);

  return status;
}
