import { createError, logError } from './error.module';
import { TryActionOptions } from './logic.type';

/**
 * Execute action with logging error.
 *
 * @param action The action to execute.
 * @param options The execute options.
 *
 * @returns The result.
 */
export default async function executeAction<Result>(action: () => Result | Promise<Result>, options: TryActionOptions = {}): Promise<Result> {
  const { isLogError = true, errorMessage } = options;

  try {
    return await action();
  } catch (exception) {
    const error = createError(exception);

    if (isLogError && errorMessage) {
      logError(error, errorMessage);
    }

    throw error;
  }
}
