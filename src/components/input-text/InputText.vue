<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils';
import type { InputTextProps } from './types';
import { Input as BaseInput } from '../__base/input';

const props = defineProps<InputTextProps>();

const emit = defineEmits<{
  'update:modelValue': [value: null | string];
}>();

const value = computed<string | undefined>({
  // eslint-disable-next-line no-undefined
  get: () => props.modelValue ?? undefined,
  set: (it) => emit('update:modelValue', it ?? null),
});
</script>

<template>
  <BaseInput
    v-model.trim="value as string | undefined"
    type="text"
    :placeholder
    :disabled
    :maxlength="max"
    :minlength="min"
    :size
    spellcheck="false"
    :class="cn('focus-visible:ring-0 disabled:cursor-default', props.class)"
    @blur="onBlur"
  />
</template>
