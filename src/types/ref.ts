import type { Option } from '@tb-dev/utils';
import type { MaybeRefOrGetter } from 'vue';

export type MaybeNilRef<T> = MaybeRefOrGetter<Option<T>>;
