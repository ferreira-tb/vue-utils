import { computed, type Ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { handleError } from '../../utils/error';

export interface LocalRefOptions {
  deep?: boolean;
  initOnMounted?: boolean;
  onError?: (err: unknown) => void;
  writeDefaults?: boolean;
}

interface Value<T> {
  inner: T;
}

export function localRef<T>(key: string, initial: T, options?: LocalRefOptions): Ref<T> {
  const defaultValue: Value<T> = { inner: initial };
  const local = useLocalStorage<Value<T>>(key, defaultValue, {
    deep: options?.deep ?? true,
    initOnMounted: options?.initOnMounted ?? true,
    onError: options?.onError ?? handleError,
    writeDefaults: options?.writeDefaults ?? true,

    serializer: {
      read: JSON.parse,
      write: JSON.stringify,
    },
  });

  return computed<T>({
    get: () => local.value.inner,
    set: (value: T) => {
      local.value.inner = value;
    },
  });
}
