import { computed, type Ref } from 'vue';
import { handleError } from '../../utils/error';
import { useSessionStorage } from '@vueuse/core';

export interface SessionRefOptions {
  deep?: boolean;
  initOnMounted?: boolean;
  listenToStorageChanges?: boolean;
  onError?: (err: unknown) => void;
  writeDefaults?: boolean;
}

interface Value<T> {
  inner: T;
}

export function sessionRef<T>(key: string, initial: T, options?: SessionRefOptions): Ref<T> {
  const defaultValue: Value<T> = { inner: initial };
  const session = useSessionStorage<Value<T>>(key, defaultValue, {
    deep: options?.deep ?? true,
    initOnMounted: options?.initOnMounted ?? true,
    listenToStorageChanges: options?.listenToStorageChanges ?? true,
    onError: options?.onError ?? handleError,
    writeDefaults: options?.writeDefaults ?? true,

    serializer: {
      read: JSON.parse,
      write: JSON.stringify,
    },
  });

  return computed<T>({
    get: () => session.value.inner,
    set: (value: T) => {
      session.value.inner = value;
    },
  });
}
