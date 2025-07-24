import { Mutex } from 'es-toolkit';
import { readonly, ref } from 'vue';

export function useMutex() {
  const mutex = new Mutex();
  const locked = ref(mutex.isLocked);

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

    return promise;
  }

  return {
    locked: readonly(locked),
    acquire,
    release,
    lock,
  };
}
