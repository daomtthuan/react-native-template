/**
 * Create error from exception.
 *
 * @param exception The exception.
 *
 * @returns The error.
 */
export function createError(exception: unknown): Error {
  if (exception instanceof Error) {
    return exception;
  }

  if (typeof exception === 'object') {
    return Error(JSON.stringify(exception, null, 2));
  }

  if (typeof exception === 'string' || typeof exception === 'number' || typeof exception === 'boolean') {
    return Error(exception.toString());
  }

  return Error('Unknown error.');
}

/**
 * Write error to log file.
 *
 * @param error The error.
 * @param message The message before logging error.
 *
 * @returns The error.
 */
export function logError(error: Error, message?: string): void {
  if (message) {
    console.error(message);
  }
  console.error(error.message);
}
