import { createStackNavigator } from '@react-navigation/stack';

import { AboutScreen, DefaultRouterParamList, WelcomeScreen } from '@/screens/DefaultScreens';

const { Navigator, Screen } = createStackNavigator<DefaultRouterParamList>();

/**
 * DefaultRouter component.
 *
 * @returns The Default router component.
 */
export default function DefaultRouter() {
  return (
    <Navigator initialRouteName="Welcome">
      <Screen name="Welcome" component={WelcomeScreen} />
      <Screen name="About" component={AboutScreen} />
    </Navigator>
  );
}
