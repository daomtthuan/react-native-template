import { ValueOf } from 'type-fest';

/** Hook status. */
export const hookStatus = {
  /** Idle. */
  idle: 'idle',
  /** Pending. */
  pending: 'pending',
  /** Success. */
  success: 'success',
  /** Error. */
  error: 'error',
} as const;

/** Hook status type. */
export type HookStatus = ValueOf<typeof hookStatus>;
