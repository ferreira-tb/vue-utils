import type { App } from 'vue';
import { getCurrentApp, trySetCurrentApp } from './app';
import type { MaybePromise, Option } from '@tb-dev/utils';

export type ErrorHandler = (err: unknown) => MaybePromise<void>;

function create() {
  let ERROR_HANDLER_FN: Option<ErrorHandler> = null;

  function get() {
    return ERROR_HANDLER_FN;
  }

  function set(fn: ErrorHandler, app: Option<App | boolean> = true) {
    ERROR_HANDLER_FN = fn;

    if (app) {
      let _app: App;
      if (app === true) {
        _app = getCurrentApp();
      } else {
        trySetCurrentApp(app);
        _app = app;
      }

      _app.config.errorHandler = (err) => {
        handle(err, true);
      };
    }
  }

  function handle(err: unknown, rethrow = true) {
    if (ERROR_HANDLER_FN) {
      void Promise.try(ERROR_HANDLER_FN, err);
    } else if (rethrow) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw err;
    }
  }

  return { get, set, handle };
}

export const { get: getErrorHandler, set: setErrorHandler, handle: handleError } = create();
