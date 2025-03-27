import type { MaybeRefOrGetter } from 'vue';
import type { Option } from '@tb-dev/utils';

export type MaybeNilRef<T> = MaybeRefOrGetter<Option<T>>;
