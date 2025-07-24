import { Mutex } from 'es-toolkit';
import { readonly, ref } from 'vue';
import type { Option } from '@tb-dev/utils';
import { handleError } from '../../utils/error';

export interface UseMutexOptions {
  onError?: ((err: unknown) => void) | boolean;
}

export function useMutex(options?: UseMutexOptions) {
  const mutex = new Mutex();
  const locked = ref(mutex.isLocked);

  let onError: Option<(err: unknown) => void>;
  if (typeof options?.onError === 'function') {
    onError = options.onError;
  } else if (options?.onError !== false) {
    onError = handleError;
  }

  async function acquire() {
    await mutex.acquire();
    locked.value = mutex.isLocked;
  }

  function release() {
    mutex.release();
    locked.value = mutex.isLocked;
  }

  function lock<T = unknown>(fn: () => Promise<T>) {
    const { resolve, reject, promise } = Promise.withResolvers<T>();
    acquire()
      .then(() => fn())
      .then((value) => resolve(value))
      .catch(reject)
      .finally(release);

    if (onError) {
      return promise.catch(onError);
    }

    return promise;
  }

  return {
    locked: readonly(locked),
    acquire,
    release,
    lock,
  };
}
