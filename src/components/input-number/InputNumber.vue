<script setup lang="ts">
import { computed } from 'vue';
import { Label } from '../label';
import type { InputNumberProps } from './types';
import { createReusableTemplate } from '@vueuse/core';
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

// eslint-disable-next-line @typescript-eslint/naming-convention
const [DefineTemplate, ReuseTemplate] = createReusableTemplate();
</script>

<template>
  <DefineTemplate>
    <NumberField
      v-model="value"
      :default-value
      :format-options
      :min
      :max
      :disabled
      :class="props.class"
    >
      <NumberFieldContent>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldContent>
    </NumberField>
  </DefineTemplate>

  <Label v-if="label" :class="labelClass">
    <span>{{ label }}</span>
    <ReuseTemplate />
  </Label>
  <ReuseTemplate v-else />
</template>
