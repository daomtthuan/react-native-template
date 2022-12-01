import 'intl-pluralrules';

import { AppRegistry } from 'react-native';

import { App } from '@/containers/App';

/**
 * Start the application.
 *
 * @param appName The app name.
 */
function main(appName: string) {
  AppRegistry.registerComponent(appName, () => App);
}

export default main;
