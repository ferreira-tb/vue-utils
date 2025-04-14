<script setup lang="ts">
import { cn } from '../../utils';
import type { SelectProps } from './types';
import { computed, type VNode } from 'vue';
import { Label as BaseLabel } from '../__base/label';
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
      <BaseSelect v-bind="$attrs" v-model="value" :autocomplete :autofocus :disabled :required>
        <BaseSelectTrigger :class="cn('w-full', triggerClass)">
          <BaseSelectValue :placeholder />
        </BaseSelectTrigger>
        <BaseSelectContent :class="contentClass">
          <slot></slot>
        </BaseSelectContent>
      </BaseSelect>

      <slot name="action"></slot>
    </div>
  </DefineTemplate>

  <BaseLabel v-if="label" :class="cn('flex w-full flex-col gap-2 font-normal', labelClass)">
    <span class="w-full">{{ label }}</span>
    <ReuseTemplate />
  </BaseLabel>
  <ReuseTemplate v-else />
</template>
