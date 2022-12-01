import { NavigationContainer } from '@react-navigation/native';

import { DefaultRouter } from '@/routers/DefaultRouter';

/**
 * Navigation component.
 *
 * @returns The Navigation component.
 */
function Navigation() {
  return (
    <NavigationContainer>
      <DefaultRouter />
    </NavigationContainer>
  );
}

export default Navigation;
