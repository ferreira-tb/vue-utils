<script setup lang="ts">
import { cn } from '../../utils';
import type { InputProps } from './types';
import type { Option } from '@tb-dev/utils';
import { computed, useTemplateRef } from 'vue';
import { Label as BaseLabel } from '../__base/label';
import { Input as BaseInput } from '../__base/input';
import { createReusableTemplate } from '@vueuse/core';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<InputProps>(), {
  spellcheck: 'false',
  type: 'text',
});

const emit = defineEmits<{
  'update:modelValue': [value: null | string];
}>();

const inputEl = useTemplateRef('inputEl');

const value = computed<string | undefined>({
  // eslint-disable-next-line no-undefined
  get: () => props.modelValue ?? undefined,
  set: (it) => emit('update:modelValue', it ?? null),
});

// eslint-disable-next-line @typescript-eslint/naming-convention
const [DefineTemplate, ReuseTemplate] = createReusableTemplate();

function focus() {
  (inputEl.value?.$el as Option<HTMLInputElement>)?.focus();
}

defineExpose({ focus });
</script>

<template>
  <DefineTemplate>
    <BaseInput
      ref="inputEl"
      v-bind="$attrs"
      v-model.trim="value as string | undefined"
      :type
      :autocomplete
      :autofocus
      :placeholder
      :disabled
      :maxlength="max"
      :minlength="min"
      :readonly
      :required
      :size
      :spellcheck
      :style
      :class="cn('focus-visible:ring-0 disabled:cursor-default', props.class)"
      @blur="onBlur"
    />
  </DefineTemplate>

  <BaseLabel v-if="label" :class="cn('flex w-full flex-col gap-2 font-normal', labelClass)">
    <span class="w-full">{{ label }}</span>
    <ReuseTemplate />
  </BaseLabel>
  <ReuseTemplate v-else />
</template>
