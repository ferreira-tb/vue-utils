<script setup lang="ts" generic="T extends string">
import type { VNode } from 'vue';
import { cn } from '../../utils';
import { Button } from '../button';
import { RouterLink } from 'vue-router';
import type { ButtonLinkProps } from './types';
import { createReusableTemplate } from '@vueuse/core';

withDefaults(defineProps<ButtonLinkProps<T>>(), {
  size: 'default',
  variant: 'ghost',
});

defineSlots<{ default?: () => VNode }>();

// eslint-disable-next-line @typescript-eslint/naming-convention
const [DefineTemplate, ReuseTemplate] = createReusableTemplate();
</script>

<template>
  <DefineTemplate>
    <Button :variant :size :disabled :class="cn('size-full', buttonClass)">
      <span v-if="label">{{ label }}</span>
      <slot v-else></slot>
    </Button>
  </DefineTemplate>

  <div v-if="disabled">
    <ReuseTemplate />
  </div>
  <RouterLink v-else :to="{ name: to }">
    <ReuseTemplate />
  </RouterLink>
</template>
