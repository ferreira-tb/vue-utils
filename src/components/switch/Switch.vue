<script setup lang="ts">
import { Label } from '../label';
import type { VNode } from 'vue';
import { cn } from '../../utils';
import type { SwitchProps } from './types';
import { createReusableTemplate } from '@vueuse/core';
import { Switch as BaseSwitch } from '../__base/switch';

const props = defineProps<SwitchProps>();

const toggled = defineModel<boolean>({ required: true });

defineSlots<{
  label?: () => VNode;
  thumb?: () => VNode;
}>();

// eslint-disable-next-line @typescript-eslint/naming-convention
const [DefineTemplate, ReuseTemplate] = createReusableTemplate();
</script>

<template>
  <DefineTemplate>
    <BaseSwitch v-model="toggled" :disabled :class="props.class">
      <template v-if="$slots.thumb" #thumb>
        <slot name="thumb"></slot>
      </template>
    </BaseSwitch>
  </DefineTemplate>

  <Label
    v-if="label || $slots.label"
    :class="cn('flex flex-row items-center justify-start gap-2', labelClass)"
  >
    <span v-if="label" class="w-full">{{ label }}</span>
    <slot v-else name="label"></slot>
    <ReuseTemplate />
  </Label>
  <ReuseTemplate v-else />
</template>
