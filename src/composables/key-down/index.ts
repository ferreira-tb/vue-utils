import { effectScope } from 'vue';
import { handleError } from '../../utils/error';
import type { Fn, MaybePromise, Option } from '@tb-dev/utils';
import {
  type KeyFilter,
  onKeyStroke,
  type OnKeyStrokeOptions,
  tryOnScopeDispose,
} from '@vueuse/core';

export type KeyDownEventHandler = Option<(event: KeyboardEvent) => MaybePromise<unknown>>;

export type OnKeyDownOptions = Omit<OnKeyStrokeOptions, 'eventName'> & {
  altKey?: boolean;
  ctrlKey?: boolean;
  detached?: boolean;
  metaKey?: boolean;
  prevent?: boolean;
  shiftKey?: boolean;
  stopPropagation?: boolean;
};

export function onKeyDown(
  key: KeyFilter,
  handler?: KeyDownEventHandler,
  options: OnKeyDownOptions = {}
) {
  const {
    altKey = false,
    ctrlKey = false,
    detached = false,
    metaKey = false,
    prevent = true,
    shiftKey = false,
    stopPropagation = false,
  } = options;

  const callback = (e: KeyboardEvent) => {
    if (
      e.altKey !== altKey ||
      e.ctrlKey !== ctrlKey ||
      e.metaKey !== metaKey ||
      e.shiftKey !== shiftKey
    ) {
      return;
    }

    if (prevent) {
      e.preventDefault();
    }

    if (stopPropagation) {
      e.stopPropagation();
    }

    if (handler) {
      Promise.try(handler, e).catch(handleError);
    }
  };

  const on = () => {
    return onKeyStroke(key, callback, {
      ...options,
      eventName: 'keydown',
      dedupe: true,
    });
  };

  let stop: Fn;
  if (detached) {
    const scope = effectScope(/* detached */ true);
    stop = scope.run(() => on())!;
  } else {
    stop = on();
    tryOnScopeDispose(() => stop());
  }

  return stop;
}

export function onAltKeyDown(
  key: KeyFilter,
  handler?: KeyDownEventHandler,
  options?: Omit<OnKeyDownOptions, 'altKey' | 'eventName'>
) {
  return onKeyDown(key, handler, { ...options, altKey: true });
}

export function onCtrlKeyDown(
  key: KeyFilter,
  handler?: KeyDownEventHandler,
  options?: Omit<OnKeyDownOptions, 'ctrlKey' | 'eventName'>
) {
  return onKeyDown(key, handler, { ...options, ctrlKey: true });
}
