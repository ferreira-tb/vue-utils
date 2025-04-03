import { useWindowHeight, useWindowWidth } from '../window-size';
import { computed, type MaybeRefOrGetter, type Ref, toRef } from 'vue';
import { type MaybeElement, useElementSize as original } from '@vueuse/core';

export function useElementSize<T extends MaybeElement>(element: MaybeRefOrGetter<T>) {
  return original(toRef(element), { height: 0, width: 0 }, { box: 'border-box' });
}

export function useHeight<T extends MaybeElement>(element: MaybeRefOrGetter<T>) {
  return useElementSize(element).height as Readonly<Ref<number>>;
}

export function useHeightDiff<T extends MaybeElement>(element: MaybeRefOrGetter<T>) {
  const height = useHeight(element);
  const windowHeight = useWindowHeight();
  return computed(() => windowHeight.value - height.value);
}

export function useWidth<T extends MaybeElement>(element: MaybeRefOrGetter<T>) {
  return useElementSize(element).width as Readonly<Ref<number>>;
}

export function useWidthDiff<T extends MaybeElement>(element: MaybeRefOrGetter<T>) {
  const width = useWidth(element);
  const windowWidth = useWindowWidth();
  return computed(() => windowWidth.value - width.value);
}
