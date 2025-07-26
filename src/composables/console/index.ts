import { toRef } from 'vue';
import { watchImmediate } from '@vueuse/core';
import type { MaybeNilRef } from '../../types';

export const console = {
  assert,
  debug,
  error,
  info,
  log,
  trace,
  warn,
} as const;

function assert(cond: MaybeNilRef<boolean>, message: string) {
  return watchImmediate(toRef(cond), (value) => {
    globalThis.console.assert(value ?? false, message);
  });
}

function debug<T>(source: MaybeNilRef<T>) {
  return watchImmediate(toRef(source), (value) => globalThis.console.debug(value));
}

function error<T>(source: MaybeNilRef<T>) {
  return watchImmediate(toRef(source), (value) => globalThis.console.error(value));
}

function info<T>(source: MaybeNilRef<T>) {
  return watchImmediate(toRef(source), (value) => globalThis.console.info(value));
}

function log<T>(source: MaybeNilRef<T>) {
  return watchImmediate(toRef(source), (value) => globalThis.console.log(value));
}

function trace<T>(source: MaybeNilRef<T>) {
  return watchImmediate(toRef(source), (value) => globalThis.console.trace(value));
}

function warn<T>(source: MaybeNilRef<T>) {
  return watchImmediate(toRef(source), (value) => globalThis.console.warn(value));
}
