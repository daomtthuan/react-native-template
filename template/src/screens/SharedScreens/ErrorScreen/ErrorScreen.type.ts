import { PropsWithoutRef } from 'react';

import { ErrorCode } from '@/common/error';

/** ErrorScreen props. */
export type ErrorScreenProps = PropsWithoutRef<{
  /** Error code. */
  code: ErrorCode;
}>;
