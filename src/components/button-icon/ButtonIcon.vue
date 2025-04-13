<script setup lang="ts" generic="T extends string">
import { cn } from '../../utils';
import type { VNode } from 'vue';
import { Button } from '../button';
import { ButtonLink } from '../button-link';
import type { ButtonIconProps } from './types';

const props = defineProps<ButtonIconProps<T>>();

defineSlots<{ default?: () => VNode }>();
</script>

<template>
  <ButtonLink v-if="to" :to variant="ghost" size="icon" :class="props.class" :button-class>
    <component :is="icon" :class="iconClass" :size="iconSize" />
  </ButtonLink>
  <Button v-else variant="ghost" size="icon" :class="cn(props.class, buttonClass)">
    <component :is="icon" :class="iconClass" :size="iconSize" />
  </Button>
</template>
