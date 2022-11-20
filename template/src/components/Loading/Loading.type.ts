import { PropsWithoutRef } from 'react';

/** Loading props. */
export type LoadingProps = PropsWithoutRef<{
  spinnerColor?: string;
  textColor?: string;
  showMessage?: boolean;
  inline?: boolean;
}>;
