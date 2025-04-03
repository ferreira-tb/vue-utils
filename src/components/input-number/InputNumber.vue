<script setup lang="ts">
import { computed } from 'vue';
import type { InputNumberProps } from './types';
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '../__base/number-field';

const props = withDefaults(defineProps<InputNumberProps>(), {
  formatOptions: () => ({ useGrouping: false }),
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: null | number): void;
}>();

const value = computed<number | undefined>({
  // eslint-disable-next-line no-undefined
  get: () => props.modelValue ?? undefined,
  set: (it) => emit('update:modelValue', it ?? null),
});
</script>

<template>
  <NumberField v-model="value" :default-value :format-options :min :max :disabled>
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>
