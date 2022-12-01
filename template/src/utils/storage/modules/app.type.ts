import { ValueOf } from 'type-fest';

/** App storage key. */
export const appStorage = {
  /** First times launch app key. */
  firstTimesLaunch: 'app:firstTimesLaunch',
} as const;

/** App storage key type. */
export type AppStorage = ValueOf<typeof appStorage>;
