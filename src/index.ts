export * from './utils';
export type * from './types';

export * from './composables';

if (!Object.hasOwn(globalThis, '__VUEUTILS__')) {
  Object.defineProperty(globalThis, '__VUEUTILS__', {
    configurable: false,
    enumerable: true,
    writable: false,
    value: {},
  });
}
