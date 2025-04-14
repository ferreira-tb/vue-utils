<script setup lang="ts">
import { cn } from '../../utils';
import type { CheckboxProps } from './types';
import type { CheckboxRootProps } from 'reka-ui';
import { Label as BaseLabel } from '../__base/label';
import { createReusableTemplate } from '@vueuse/core';
import { Checkbox as BaseCheckbox } from '../__base/checkbox';

defineProps<CheckboxProps>();

const value = defineModel<CheckboxRootProps['modelValue']>({ required: false });

// eslint-disable-next-line @typescript-eslint/naming-convention
const [DefineTemplate, ReuseTemplate] = createReusableTemplate();
</script>

<template>
  <DefineTemplate>
    <BaseCheckbox v-bind="$attrs" v-model="value" :default-value :disabled />
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
