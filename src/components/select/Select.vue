<script setup lang="ts">
import { cn } from '../../utils';
import { Label } from '../label';
import type { SelectProps } from './types';
import { computed, type VNode } from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import {
  Select as BaseSelect,
  SelectContent as BaseSelectContent,
  SelectTrigger as BaseSelectTrigger,
  SelectValue as BaseSelectValue,
} from '../__base/select';

const props = defineProps<SelectProps>();

const emit = defineEmits<{
  'update:modelValue': [value: string | null];
}>();

defineSlots<{
  action?: () => VNode;
  default?: () => VNode;
}>();

const value = computed<string | undefined>({
  // eslint-disable-next-line no-undefined
  get: () => props.modelValue ?? undefined,
  set: (it) => emit('update:modelValue', it ?? null),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
const [DefineTemplate, ReuseTemplate] = createReusableTemplate();
</script>

<template>
  <DefineTemplate>
    <div class="flex w-full items-center justify-center gap-2">
      <BaseSelect v-model="value" :disabled autocomplete="off" :class="cn('w-full', props.class)">
        <BaseSelectTrigger>
          <BaseSelectValue :placeholder />
        </BaseSelectTrigger>
        <BaseSelectContent :class="contentClass">
          <slot></slot>
        </BaseSelectContent>
      </BaseSelect>

      <slot name="action"></slot>
    </div>
  </DefineTemplate>

  <Label v-if="label" :class="cn('flex flex-col gap-2', labelClass)">
    <span class="w-full">{{ label }}</span>
    <ReuseTemplate />
  </Label>
  <ReuseTemplate v-else />
</template>
