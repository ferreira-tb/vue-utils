<script setup lang="ts">
import type { VNode } from 'vue';
import {
  HoverCard as BaseHoverCard,
  HoverCardContent as BaseHoverCardContent,
  HoverCardTrigger as BaseHoverCardTrigger,
} from '../__base/hover-card';

defineSlots<{
  default: () => VNode;
  trigger: () => VNode;
}>();
</script>

<template>
  <BaseHoverCard>
    <BaseHoverCardTrigger>
      <slot name="trigger"></slot>
    </BaseHoverCardTrigger>
    <BaseHoverCardContent>
      <slot></slot>
    </BaseHoverCardContent>
  </BaseHoverCard>
</template>
