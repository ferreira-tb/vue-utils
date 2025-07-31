import { useWindowHeight, useWindowWidth } from '../useWindowSize';
import { computed, type MaybeRefOrGetter, type Ref, toRef } from 'vue';
import { type MaybeElement, useElementSize as original } from '@vueuse/core';

export function useElementSize<T extends MaybeElement>(element: MaybeRefOrGetter<T>) {
  return original(toRef(element), { height: 0, width: 0 }, { box: 'border-box' });
}

export function useHeight<T extends MaybeElement>(element: MaybeRefOrGetter<T>) {
  return useElementSize(element).height as Readonly<Ref<number>>;
}

export function useHeightDiff<T extends MaybeElement>(
  element: MaybeRefOrGetter<T>,
  lhs?: MaybeRefOrGetter<number>
) {
  const height = useHeight(element);
  const lhsRef = lhs ? toRef(lhs) : useWindowHeight();
  return computed(() => lhsRef.value - height.value);
}

export function useWidth<T extends MaybeElement>(element: MaybeRefOrGetter<T>) {
  return useElementSize(element).width as Readonly<Ref<number>>;
}

export function useWidthDiff<T extends MaybeElement>(
  element: MaybeRefOrGetter<T>,
  lhs?: MaybeRefOrGetter<number>
) {
  const width = useWidth(element);
  const lhsRef = lhs ? toRef(lhs) : useWindowWidth();
  return computed(() => lhsRef.value - width.value);
}
