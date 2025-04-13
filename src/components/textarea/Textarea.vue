<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils';
import { Label } from '../label';
import type { TextareaProps } from './types';
import { createReusableTemplate } from '@vueuse/core';
import { Textarea as BaseTextarea } from '../__base/textarea';

const props = defineProps<TextareaProps>();

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
    <BaseTextarea
      v-model.trim="value as string | undefined"
      type="text"
      :autocapitalize
      autocomplete="off"
      autocorrect="off"
      :disabled
      :maxlength="max"
      :minlength="min"
      :placeholder
      :readonly
      :required
      spellcheck="false"
      :class="
        cn(
          'h-full resize-none font-normal focus-visible:ring-0 disabled:cursor-default',
          props.class
        )
      "
      @blur="onBlur"
    />
  </DefineTemplate>

  <Label v-if="label" :class="cn('flex flex-col gap-1', labelClass)">
    <span class="w-full">{{ label }}</span>
    <ReuseTemplate />
  </Label>
  <ReuseTemplate v-else />
</template>
