<script setup lang="ts">
import type { VNode } from 'vue';
import {
  Tooltip as BaseTooltip,
  TooltipContent as BaseTooltipContent,
  TooltipProvider as BaseTooltipProvider,
  TooltipTrigger as BaseTooltipTrigger,
} from '../__base/tooltip';

defineSlots<{
  default: () => VNode;
  trigger: () => VNode;
}>();
</script>

<template>
  <BaseTooltipProvider>
    <BaseTooltip>
      <BaseTooltipTrigger as-child>
        <slot name="trigger"></slot>
      </BaseTooltipTrigger>
      <BaseTooltipContent>
        <slot></slot>
      </BaseTooltipContent>
    </BaseTooltip>
  </BaseTooltipProvider>
</template>
