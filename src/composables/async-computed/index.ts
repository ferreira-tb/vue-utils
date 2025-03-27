import type { ShallowRef } from 'vue';
import { handleError } from '../../utils/error';
import { computedAsync, type AsyncComputedOptions as Options } from '@vueuse/core';

export type AsyncComputedOptions = Omit<Options, 'shallow'>;

export function asyncComputed<T>(
  initial: T,
  callback: () => Promise<T> | T,
  options?: AsyncComputedOptions
) {
  const state = computedAsync(callback, initial, {
    onError: handleError,
    shallow: true,
    ...options,
  });

  return state as Readonly<ShallowRef<T>>;
}
