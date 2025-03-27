import { type Option, unwrap } from '@tb-dev/utils';
import { type App, type InjectionKey, inject as originalInject } from 'vue';

function create() {
  let APP: Option<App> = null;

  function get() {
    return unwrap(APP, 'no active app');
  }

  function set(app: App) {
    APP = app;
  }

  return { get, set };
}

export const { get: getCurrentApp, set: setCurrentApp } = create();

export function runWithContext<T>(fn: () => T) {
  return getCurrentApp().runWithContext(fn);
}

export function provide<T>(key: InjectionKey<T>, value: T) {
  getCurrentApp().provide(key, value);
}

export function inject<T>(key: InjectionKey<T>): T {
  const value = fallibleInject(key);
  if (typeof value === 'undefined') {
    throw new TypeError('injection failed: value not provided');
  }

  return value;
}

export function fallibleInject<T>(key: InjectionKey<T>) {
  return runWithContext(() => originalInject(key));
}
