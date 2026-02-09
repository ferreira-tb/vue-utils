import type { Ref, ShallowRef } from 'vue';
import { handleError } from '../../utils/error';
import { useAsyncState, type UseAsyncStateOptions } from '@vueuse/core';

type Options = Omit<UseAsyncStateOptions<true>, 'shallow'>;

export interface AsyncRefOptions extends Options {
  immediate?: boolean;
}

export function asyncRef<T>(initial: T, fn: () => Promise<T>, options: AsyncRefOptions = {}) {
  const value = useAsyncState<T>(fn, initial, {
    immediate: options.immediate ?? true,
    onError: handleError,
    resetOnExecute: false,
    shallow: true,
    throwError: false,
    ...options,
  });

  const load = async () => {
    await value.execute();
  };

  return {
    state: value.state as ShallowRef<T>,
    loading: value.isLoading as Readonly<Ref<boolean>>,
    isReady: value.isReady as Readonly<Ref<boolean>>,
    load,
  };
}
