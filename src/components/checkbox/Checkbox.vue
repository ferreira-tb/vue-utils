<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils';
import { Label } from '../label';
import type { CheckboxProps } from './types';
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
    <BaseCheckbox v-model="value" :disabled :class="props.class" />
  </DefineTemplate>

  <Label v-if="label" :class="cn('flex items-center justify-start gap-1 font-normal', labelClass)">
    <ReuseTemplate />
    <span class="w-full">{{ label }}</span>
  </Label>
  <ReuseTemplate v-else />
</template>
