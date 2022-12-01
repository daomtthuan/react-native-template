import { useMemo } from 'react';

import { hookStatus, HookStatus } from './hook.type';

/**
 * Create hook status checker.
 *
 * @param statuses Statuses list to check.
 *
 * @returns The hook status checker.
 */
export default function useStatusChecker(statuses: HookStatus[]) {
  /** Status checker. */
  const checker = useMemo(
    () => ({
      /**
       * Check any status is pending or not.
       *
       * @returns Is any status is pending or not.
       */
      isPending: () => statuses.some((status) => status === hookStatus.idle || status === hookStatus.pending),

      /**
       * Check all statuses are success or not.
       *
       * @returns Are all statuses are success or not.
       */
      isSuccess: () => statuses.every((status) => status === hookStatus.success),

      /**
       * Check any status is error or not.
       *
       * @returns Is any status is error or not.
       */
      isError: () => statuses.some((status) => status === hookStatus.error),
    }),
    [statuses],
  );

  return checker;
}
