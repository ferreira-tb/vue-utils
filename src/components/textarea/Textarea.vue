<script setup lang="ts">
import { cn } from '../../utils';
import type { TextareaProps } from './types';
import { computed, type CSSProperties } from 'vue';
import { Label as BaseLabel } from '../__base/label';
import { type Option, toPixel } from '@tb-dev/utils';
import { createReusableTemplate } from '@vueuse/core';
import { Textarea as BaseTextarea } from '../__base/textarea';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<TextareaProps>(), {
  autocomplete: 'off',
  autocorrect: 'off',
  spellcheck: 'false',
});

const emit = defineEmits<{
  'update:modelValue': [value: null | string];
}>();

const value = computed<string | undefined>({
  // eslint-disable-next-line no-undefined
  get: () => props.modelValue ?? undefined,
  set: (it) => emit('update:modelValue', it ?? null),
});

const textareaHeight = computed<Option<CSSProperties>>(() => {
  return props.height ? { height: toPixel(props.height) } : null;
});

// eslint-disable-next-line @typescript-eslint/naming-convention
const [DefineTemplate, ReuseTemplate] = createReusableTemplate();
</script>

<template>
  <DefineTemplate>
    <BaseTextarea
      v-bind="$attrs"
      v-model.trim="value as string | undefined"
      :autocapitalize
      :autocomplete
      :autocorrect
      :autofocus
      :cols
      :disabled
      :maxlength="max"
      :minlength="min"
      :placeholder
      :readonly
      :required
      :rows
      :spellcheck
      :style="[textareaHeight, style]"
      :class="
        cn(
          'size-full resize-none font-normal focus-visible:ring-0 disabled:cursor-default',
          props.class
        )
      "
      @blur="onBlur"
    />
  </DefineTemplate>

  <BaseLabel v-if="label" :class="cn('flex w-full flex-col gap-1 font-normal', labelClass)">
    <span class="w-full">{{ label }}</span>
    <ReuseTemplate />
  </BaseLabel>
  <ReuseTemplate v-else />
</template>
