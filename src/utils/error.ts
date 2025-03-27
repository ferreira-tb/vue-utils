import type { MaybePromise, Option } from '@tb-dev/utils';

export type ErrorHandler = (err: unknown) => MaybePromise<void>;

function create() {
  let ERROR_HANDLER_FN: Option<ErrorHandler> = null;

  function get() {
    return ERROR_HANDLER_FN;
  }

  function set(fn: ErrorHandler) {
    ERROR_HANDLER_FN = fn;
  }

  function handle(err: unknown) {
    if (ERROR_HANDLER_FN) {
      void Promise.try(ERROR_HANDLER_FN, err);
    }
  }

  return { get, set, handle };
}

export const { get: getErrorHandler, set: setErrorHandler, handle: handleError } = create();
