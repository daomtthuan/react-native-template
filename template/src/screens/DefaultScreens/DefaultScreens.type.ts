import { StackScreenProps } from '@react-navigation/stack';

/** DefaultRouter param list. */
export type DefaultRouterParamList = {
  /** Welcome screen params. */
  Welcome: undefined;
  /** About screen params. */
  About: undefined;
};

/** DefaultRoute name. */
export type DefaultRouteName = keyof DefaultRouterParamList;

/** DefaultScreen props. */
export type DefaultScreenProps<Route extends DefaultRouteName> = StackScreenProps<DefaultRouterParamList, Route>;
