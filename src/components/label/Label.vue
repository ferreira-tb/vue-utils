<script setup lang="ts">
import { cn } from '../../utils';
import type { VNode } from 'vue';
import type { LabelProps } from './types';
import { Label as BaseLabel } from '../__base/label';

const props = defineProps<LabelProps>();

defineSlots<{ default: () => VNode }>();
</script>

<template>
  <BaseLabel :class="cn('flex w-full flex-col gap-2 font-normal', props.class)">
    <slot></slot>
  </BaseLabel>
</template>
