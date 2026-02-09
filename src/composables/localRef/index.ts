import type { Ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { handleError } from '../../utils/error';

export interface LocalRefOptions {
  deep?: boolean;
  initOnMounted?: boolean;
  listenToStorageChanges?: boolean;
  mergeDefaults?: boolean;
  onError?: (err: unknown) => void;
  shallow?: boolean;
  writeDefaults?: boolean;
}

export function localRef<T>(key: string, initial: T, options?: LocalRefOptions): Ref<T> {
  return useLocalStorage<T>(key, initial, {
    deep: options?.deep ?? true,
    initOnMounted: options?.initOnMounted ?? true,
    listenToStorageChanges: options?.listenToStorageChanges ?? true,
    mergeDefaults: options?.mergeDefaults ?? true,
    onError: options?.onError ?? handleError,
    shallow: options?.shallow,
    writeDefaults: options?.writeDefaults ?? true,

    serializer: {
      read: JSON.parse,
      write: JSON.stringify,
    },
  });
}
