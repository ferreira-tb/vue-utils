<script setup lang="ts">
import type { PopoverProps } from './types';
import { onClickOutside } from '@vueuse/core';
import { useTemplateRef, type VNode } from 'vue';
import {
  Popover as BasePopover,
  PopoverContent as BasePopoverContent,
  PopoverTrigger as BasePopoverTrigger,
} from '../__base/popover';

const props = defineProps<PopoverProps>();

const isOpen = defineModel<boolean>({ required: true });

defineSlots<{
  default: () => VNode;
  trigger?: () => VNode;
}>();

const popover = useTemplateRef('contentEl');

onClickOutside(popover, () => {
  if (!props.keepOpen) close();
});

function open() {
  isOpen.value = true;
}

function close() {
  isOpen.value = false;
}

defineExpose({ close, open });
</script>

<template>
  <BasePopover v-model:open="isOpen">
    <BasePopoverTrigger as-child>
      <slot name="trigger"></slot>
    </BasePopoverTrigger>
    <BasePopoverContent ref="contentEl" :class="contentClass">
      <slot></slot>
    </BasePopoverContent>
  </BasePopover>
</template>
