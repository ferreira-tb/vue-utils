<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils';
import { Label } from '../label';
import type { InputTextProps } from './types';
import { Input as BaseInput } from '../__base/input';
import { createReusableTemplate } from '@vueuse/core';

const props = defineProps<InputTextProps>();

const emit = defineEmits<{
  'update:modelValue': [value: null | string];
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
  </DefineTemplate>

  <Label v-if="label" :class="labelClass">
    <span>{{ label }}</span>
    <ReuseTemplate />
  </Label>
  <ReuseTemplate v-else />
</template>
