import 'intl-pluralrules';

import { AppRegistry } from 'react-native';

import { App } from '@/containers/App';

/**
 * Start the application.
 *
 * @param appName The app name.
 */
export default function startApp(appName: string) {
  AppRegistry.registerComponent(appName, () => App);
}
