<script setup lang="ts" generic="T extends string">
import { Link } from '../link';
import type { VNode } from 'vue';
import { cn } from '../../utils';
import { TableCell } from '../__base/table';
import type { TableLinkProps } from './types';

defineProps<TableLinkProps<T>>();

defineSlots<{ default?: () => VNode }>();
</script>

<template>
  <TableCell>
    <Link :to :label :class="cn('flex w-full', linkClass)">
      <slot></slot>
    </Link>
  </TableCell>
</template>
