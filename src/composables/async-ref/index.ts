import type { ShallowRef } from 'vue';
import { handleError } from '../../utils/error';
import { useAsyncState, type UseAsyncStateOptions } from '@vueuse/core';

type Options = Omit<UseAsyncStateOptions<true>, 'shallow'>;

export interface AsyncRefOptions extends Options {
  immediate?: boolean;
}

export function asyncRef<T>(initial: T, fn: () => Promise<T>, options: AsyncRefOptions = {}) {
  const { immediate = true } = options;
  const { execute, state } = useAsyncState<T>(fn, initial, {
    immediate,
    onError: handleError,
    resetOnExecute: false,
    shallow: true,
    throwError: false,
    ...options,
  });

  return Object.assign(state as Readonly<ShallowRef<T>>, { execute });
}
