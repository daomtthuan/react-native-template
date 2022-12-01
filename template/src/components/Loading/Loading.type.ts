import { PropsWithoutRef } from 'react';

import { ColorScheme } from '@/theme/color';

/** Loading props. */
export type LoadingProps = PropsWithoutRef<{
  spinnerColorScheme?: ColorScheme;
  textColorScheme?: ColorScheme;
  showMessage?: boolean;
  inline?: boolean;
}>;
