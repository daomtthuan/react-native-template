import { HookStatus } from './hook.type';

export default {
  /**
   * Check any status is pending or not.
   *
   * @param statuses Statuses to check.
   *
   * @returns Is any status is pending or not.
   */
  isPending: (statuses: HookStatus[]) => statuses.some((status) => status === 'pending'),

  /**
   * Check all statues are ready or not.
   *
   * @param statuses Statuses to check.
   *
   * @returns Are all statues are ready or not.
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
