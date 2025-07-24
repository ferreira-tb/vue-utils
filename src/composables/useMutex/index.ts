import { ref } from 'vue';
import { Mutex } from 'es-toolkit';

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

  return { locked, acquire, release };
}
