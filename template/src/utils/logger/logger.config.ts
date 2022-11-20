import { ConfigureOptions, LogLevel } from 'react-native-file-logger';

export default {
  logLevel: __DEV__ ? LogLevel.Debug : LogLevel.Error,
} as ConfigureOptions;
