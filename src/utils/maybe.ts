import { isNil, type Option } from '@tb-dev/utils';
import { type MaybeRefOrGetter, toValue } from 'vue';

export function maybe<T, U>(value: MaybeRefOrGetter<Option<T>>, fn: (value: T) => U): U | null {
  const _value = toValue(value);
  return isNil(_value) ? null : fn(_value);
}
