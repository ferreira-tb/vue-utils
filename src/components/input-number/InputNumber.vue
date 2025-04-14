<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils';
import type { InputNumberProps } from './types';
import { Label as BaseLabel } from '../__base/label';
import { createReusableTemplate } from '@vueuse/core';
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '../__base/number-field';

defineOptions({
  inheritAttrs: false,
});

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
      v-bind="$attrs"
      v-model="value"
      :default-value
      :disabled
      :disable-wheel-change
      :format-options
      :min
      :max
      :step
      :step-snapping
      :style
      :class="cn('w-full', props.class)"
    >
      <NumberFieldContent>
        <NumberFieldDecrement :disabled="disabled || disableDecrement" />
        <NumberFieldInput />
        <NumberFieldIncrement :disabled="disabled || disableIncrement" />
      </NumberFieldContent>
    </NumberField>
  </DefineTemplate>

  <BaseLabel v-if="label" :class="cn('flex w-full flex-col gap-2 font-normal', labelClass)">
    <span class="w-full">{{ label }}</span>
    <ReuseTemplate />
  </BaseLabel>
  <ReuseTemplate v-else />
</template>
