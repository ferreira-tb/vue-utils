<script setup lang="ts">
import type { VNode } from 'vue';
import type { SidebarProps } from './types';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from '../__base/sidebar';

defineProps<SidebarProps>();

defineSlots<{
  content?: () => VNode;
  default?: () => VNode;
  footer?: () => VNode;
  header?: () => VNode;
  inset?: () => VNode;
}>();
</script>

<template>
  <SidebarProvider :default-open>
    <Sidebar>
      <SidebarHeader v-if="$slots.header">
        <slot name="header"></slot>
      </SidebarHeader>
      <SidebarContent v-if="$slots.content">
        <slot name="content"></slot>
      </SidebarContent>
      <SidebarFooter v-if="$slots.footer">
        <slot name="footer"></slot>
      </SidebarFooter>
    </Sidebar>

    <SidebarInset v-if="$slots.inset">
      <slot name="inset"></slot>
    </SidebarInset>
    <slot v-else></slot>
  </SidebarProvider>
</template>
