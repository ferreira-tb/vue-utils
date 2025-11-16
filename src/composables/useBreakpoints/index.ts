import type { InjectionKey } from 'vue';
import { tryInjectOrElse } from '../../utils/app';
import { breakpointsTailwind, useBreakpoints as original } from '@vueuse/core';

export type Breakpoints = ReturnType<typeof original<keyof typeof breakpointsTailwind>>;

const breakpointsKey = Symbol() as InjectionKey<Breakpoints>;

export function useBreakpoints(): Breakpoints {
  return tryInjectOrElse(breakpointsKey, () => {
    return original(breakpointsTailwind);
  });
}
