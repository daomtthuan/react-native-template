import { useEffect, useState } from 'react';
import { FileLogger } from 'react-native-file-logger';

import { HookStatus, hookStatus } from '@/common/hook';
import { executeAction } from '@/common/logic';

import loggerConfig from './logger.config';

/**
 * Init logger.
 *
 * @returns The logger status.
 */
function useLogger() {
  const [status, setStatus] = useState<HookStatus>(hookStatus.idle);

  // Init logger.
  useEffect(() => {
    setStatus(hookStatus.pending);

    executeAction(
      async () => {
        await FileLogger.configure(loggerConfig);

        if (__DEV__) {
          await FileLogger.deleteLogFiles();
        }
      },
      { errorMessage: "Couldn't init logger." },
    )
      .then(() => setStatus(hookStatus.success))
      .catch(() => setStatus(hookStatus.error));
  }, []);

  return status;
}

export default useLogger;
