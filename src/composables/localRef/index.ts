import type { Ref } from 'vue';
import { handleError } from '../../utils/error';
import { useLocalStorage, type UseStorageOptions } from '@vueuse/core';

export function localRef<T>(key: string, initial: T, options?: UseStorageOptions<T>): Ref<T> {
  return useLocalStorage<T>(key, initial, {
    deep: options?.deep ?? true,
    initOnMounted: options?.initOnMounted ?? true,
    listenToStorageChanges: options?.listenToStorageChanges ?? true,
    mergeDefaults: options?.mergeDefaults ?? true,
    onError: options?.onError ?? handleError,
    writeDefaults: options?.writeDefaults ?? true,

    serializer: {
      read: JSON.parse,
      write: JSON.stringify,
    },

    ...options,
  });
}
