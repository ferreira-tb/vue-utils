<script setup lang="ts">
import type { VNode } from 'vue';
import { Table, TableBody, TableCaption, TableFooter, TableHeader } from '../__base/table';

defineSlots<{
  caption?: () => VNode;
  default: () => VNode;
  footer?: () => VNode;
  header?: () => VNode;
}>();
</script>

<template>
  <Table>
    <TableCaption v-if="$slots.caption">
      <slot name="caption"></slot>
    </TableCaption>
    <TableHeader v-if="$slots.header">
      <slot name="header"></slot>
    </TableHeader>
    <TableBody>
      <slot></slot>
    </TableBody>
    <TableFooter v-if="$slots.footer">
      <slot name="footer"></slot>
    </TableFooter>
  </Table>
</template>
