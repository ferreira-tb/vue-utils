import { unwrap } from '@tb-dev/utils';
import { type App, type InjectionKey, inject as originalInject } from 'vue';

export function getCurrentApp() {
  return unwrap(globalThis.__VUEUTILS__.app, 'No active app');
}

export function setCurrentApp(app: App) {
  globalThis.__VUEUTILS__.app = app;
}

export function tryGetCurrentApp() {
  return globalThis.__VUEUTILS__.app;
}

export function trySetCurrentApp(app: App) {
  globalThis.__VUEUTILS__.app ??= app;
}

export function runWithContext<T>(fn: () => T): T {
  return getCurrentApp().runWithContext(fn);
}

export function provide<T>(key: InjectionKey<T>, value: T): void {
  getCurrentApp().provide(key, value);
}

export function inject<T>(key: InjectionKey<T>): T {
  const value = tryInject(key);
  if (typeof value === 'undefined') {
    throw new TypeError('Injection failed: value not provided');
  }

  return value;
}

export function tryInject<T>(key: InjectionKey<T>): T | undefined {
  return runWithContext(() => originalInject(key));
}

export function tryInjectOrElse<T>(key: InjectionKey<T>, fn: () => T): T {
  let value = tryInject(key);
  if (typeof value === 'undefined') {
    value = fn();
    provide(key, value);
  }

  return value;
}
