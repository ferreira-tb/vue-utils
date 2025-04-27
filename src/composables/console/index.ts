import { watch, type WatchSource } from 'vue';

export function log<T>(source: WatchSource<T>) {
  return watch(source, (value) => console.log(value));
}

export function warn<T>(source: WatchSource<T>) {
  return watch(source, (value) => console.warn(value));
}
