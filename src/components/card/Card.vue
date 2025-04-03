<script setup lang="ts">
import type { VNode } from 'vue';
import { cn } from '../../utils';
import { toPixel } from '@tb-dev/utils';
import { ScrollArea } from '../__base/scroll-area';
import {
  Card as BaseCard,
  CardContent as BaseCardContent,
  CardDescription as BaseCardDescription,
  CardHeader as BaseCardHeader,
  CardTitle as BaseCardTitle,
} from '../__base/card';

interface Props {
  contentClass?: string;
  descriptionClass?: string;
  headerClass?: string;
  scrollAreaClass?: string;
  scrollAreaHeight?: number | string;
  titleClass?: string;
}

withDefaults(defineProps<Props>(), {
  scrollAreaHeight: 'auto',
});

defineSlots<{
  default: () => VNode;
  description?: () => VNode;
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

    <BaseCardContent :class="cn('p-0', contentClass)">
      <ScrollArea
        v-if="scrollAreaHeight && scrollAreaHeight !== 'auto'"
        :class="scrollAreaClass"
        :style="{ height: toPixel(scrollAreaHeight) }"
      >
        <slot></slot>
      </ScrollArea>
      <slot v-else></slot>
    </BaseCardContent>
  </BaseCard>
</template>
