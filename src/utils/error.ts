import type { App } from 'vue';
import type { MaybePromise, Option } from '@tb-dev/utils';

export type ErrorHandler = (err: unknown) => MaybePromise<void>;

export interface SetErrorHandlerOptions {
  app?: App;
}

export interface HandleErrorOptions {
  rethrow?: boolean;
}

function create() {
  let ERROR_HANDLER_FN: Option<ErrorHandler> = null;

  function get() {
    return ERROR_HANDLER_FN;
  }

  function set(fn: ErrorHandler, options?: SetErrorHandlerOptions) {
    ERROR_HANDLER_FN = fn;

    if (options?.app) {
      options.app.config.errorHandler = (err) => {
        handle(err, { rethrow: true });
      };
    }
  }

  function handle(err: unknown, options?: HandleErrorOptions) {
    if (ERROR_HANDLER_FN) {
      void Promise.try(ERROR_HANDLER_FN, err);
    } else if (options?.rethrow ?? true) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw err;
    }
  }

  return { get, set, handle };
}

export const { get: getErrorHandler, set: setErrorHandler, handle: handleError } = create();
