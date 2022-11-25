import { HookStatus } from './hook.type';

/** Status checker. */
const statusChecker = {
  /**
   * Check any status is pending or not.
   *
   * @param statuses Statuses to check.
   *
   * @returns Is any status is pending or not.
   */
  isPending: (statuses: HookStatus[]) => statuses.some((status) => status === 'pending'),

  /**
   * Check all statuses are ready or not.
   *
   * @param statuses Statuses to check.
   *
   * @returns Are all statuses are ready or not.
   */
  isReady: (statuses: HookStatus[]) => statuses.every((status) => status !== 'idle' && status !== 'pending'),

  /**
   * Check any status is error or not.
   *
   * @param statuses Statuses to check.
   *
   * @returns Is any status is error or not.
   */
  isError: (statuses: HookStatus[]) => statuses.some((status) => status === 'error'),
};

export default statusChecker;
