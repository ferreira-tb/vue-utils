<script setup lang="ts">
import type { VNode } from 'vue';
import type { TableProps } from './types';
import { Table, TableBody, TableCaption, TableFooter, TableHeader } from '../__base/table';

defineProps<TableProps>();

defineSlots<{
  caption?: () => VNode;
  default: () => VNode;
  footer?: () => VNode;
  header?: () => VNode;
}>();
</script>

<template>
  <Table>
    <TableCaption v-if="$slots.caption" :class="captionClass">
      <slot name="caption"></slot>
    </TableCaption>
    <TableHeader v-if="$slots.header" :class="headerClass">
      <slot name="header"></slot>
    </TableHeader>
    <TableBody :class="bodyClass">
      <slot></slot>
    </TableBody>
    <TableFooter v-if="$slots.footer" :class="footerClass">
      <slot name="footer"></slot>
    </TableFooter>
  </Table>
</template>
