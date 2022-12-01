/** App error code. */
export const appErrorCode = {
  /** Initial error code. */
  init: {
    /** Application startup failed. */
    e000000: 'app.init.e000000',
  },
} as const;

/** App error code type. */
export type AppErrorCode = typeof appErrorCode;
