import { createStackNavigator } from '@react-navigation/stack';

import { ToggleThemeModeButton } from '@/components/ToggleThemeModeButton';
import { AboutScreen, DefaultRouterParamList, WelcomeScreen } from '@/screens/DefaultScreens';

const { Navigator, Screen } = createStackNavigator<DefaultRouterParamList>();

/**
 * DefaultRouter component.
 *
 * @returns The Default router component.
 */
function DefaultRouter() {
  return (
    <Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerRight: ToggleThemeModeButton,
      }}
    >
      <Screen name="Welcome" component={WelcomeScreen} />
      <Screen name="About" component={AboutScreen} />
    </Navigator>
  );
}

export default DefaultRouter;
