<script setup lang="ts" generic="T extends string">
import type { VNode } from 'vue';
import { RouterLink } from 'vue-router';
import type { LinkProps } from './types';

defineProps<LinkProps<T>>();

defineSlots<{ default?: () => VNode }>();
</script>

<template>
  <RouterLink :to="{ name: to }">
    <span v-if="label">{{ label }}</span>
    <slot v-else></slot>
  </RouterLink>
</template>
