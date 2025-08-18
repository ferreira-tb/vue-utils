import type { App } from 'vue';
import { getCurrentApp, trySetCurrentApp } from './app';
import type { MaybePromise, Option } from '@tb-dev/utils';

export type ErrorHandler = (err: unknown) => MaybePromise<void>;

export function getErrorHandler() {
  return globalThis.__VUEUTILS__.errorHandler;
}

export function setErrorHandler(fn: ErrorHandler, app: Option<App | boolean> = true) {
  globalThis.__VUEUTILS__.errorHandler = fn;

  if (app) {
    if (app === true) {
      app = getCurrentApp();
    }
    else {
      trySetCurrentApp(app);
    }

    app.config.errorHandler = (err) => {
      handleError(err, true);
    };
  }
}

export function handleError(err: unknown, rethrow = true) {
  if (globalThis.__VUEUTILS__.errorHandler) {
    void Promise.try(globalThis.__VUEUTILS__.errorHandler, err);
  }
  else if (rethrow) {
    // eslint-disable-next-line @typescript-eslint/only-throw-error
    throw err;
  }
}
