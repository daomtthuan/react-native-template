import { useAsync } from 'react-util-hooks';

/** Hook status. */
export type HookStatus = ReturnType<typeof useAsync>['status'];
