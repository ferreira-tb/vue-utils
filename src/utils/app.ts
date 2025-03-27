import { type Option, unwrap } from '@tb-dev/utils';
import { type App, type InjectionKey, inject as originalInject } from 'vue';

function create() {
  let APP: Option<App> = null;

  function get(): App {
    return unwrap(APP, 'no active app');
  }

  function tryGet(): Option<App> {
    return APP;
  }

  function set(app: App) {
    APP = app;
  }

  function trySet(app: App) {
    APP ??= app;
  }

  return { get, set, tryGet, trySet };
}

export const {
  get: getCurrentApp,
  set: setCurrentApp,
  tryGet: tryGetCurrentApp,
  trySet: trySetCurrentApp,
} = create();

export function runWithContext<T>(fn: () => T): T {
  return getCurrentApp().runWithContext(fn);
}

export function provide<T>(key: InjectionKey<T>, value: T) {
  getCurrentApp().provide(key, value);
}

export function inject<T>(key: InjectionKey<T>): T {
  const value = tryInject(key);
  if (typeof value === 'undefined') {
    throw new TypeError('injection failed: value not provided');
  }

  return value;
}

export function tryInject<T>(key: InjectionKey<T>) {
  return runWithContext(() => originalInject(key));
}
