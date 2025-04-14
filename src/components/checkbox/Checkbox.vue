<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils';
import type { CheckboxProps } from './types';
import { Label as BaseLabel } from '../__base/label';
import { createReusableTemplate } from '@vueuse/core';
import { Checkbox as BaseCheckbox } from '../__base/checkbox';

const props = defineProps<CheckboxProps>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const value = computed<boolean>({
  get: () => props.modelValue ?? false,
  set: (it) => emit('update:modelValue', it),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
const [DefineTemplate, ReuseTemplate] = createReusableTemplate();
</script>

<template>
  <DefineTemplate>
    <BaseCheckbox
      v-bind="$attrs"
      v-model="value"
      :default-value
      :disabled
      :required
      :class="props.class"
    />
  </DefineTemplate>

  <BaseLabel
    v-if="label"
    :class="cn('flex flex-row items-center justify-start gap-1 font-normal', labelClass)"
  >
    <ReuseTemplate />
    <span class="w-full">{{ label }}</span>
  </BaseLabel>
  <ReuseTemplate v-else />
</template>
