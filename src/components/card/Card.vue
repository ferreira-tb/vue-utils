<script setup lang="ts">
import type { VNode } from 'vue';
import { cn } from '../../utils';
import { toPixel } from '@tb-dev/utils';
import type { CardProps } from './types';
import { ScrollArea } from '../scroll-area';
import {
  Card as BaseCard,
  CardContent as BaseCardContent,
  CardDescription as BaseCardDescription,
  CardFooter as BaseCardFooter,
  CardHeader as BaseCardHeader,
  CardTitle as BaseCardTitle,
} from '../__base/card';

withDefaults(defineProps<CardProps>(), {
  scrollAreaHeight: 'auto',
});

defineSlots<{
  default?: () => VNode;
  description?: () => VNode;
  footer?: () => VNode;
  title?: () => VNode;
}>();
</script>

<template>
  <BaseCard>
    <BaseCardHeader v-if="$slots.title" :class="headerClass">
      <BaseCardTitle :class="titleClass">
        <slot name="title"></slot>
      </BaseCardTitle>
      <BaseCardDescription v-if="$slots.description" :class="descriptionClass">
        <slot name="description"></slot>
      </BaseCardDescription>
    </BaseCardHeader>

    <BaseCardContent v-if="$slots.default" :class="cn('p-0', contentClass)">
      <ScrollArea
        v-if="scrollAreaHeight && scrollAreaHeight !== 'auto'"
        :class="scrollAreaClass"
        :style="{ height: toPixel(scrollAreaHeight) }"
      >
        <slot></slot>
      </ScrollArea>
      <slot v-else></slot>
    </BaseCardContent>

    <BaseCardFooter v-if="$slots.footer" :class="footerClass">
      <slot name="footer"></slot>
    </BaseCardFooter>
  </BaseCard>
</template>
