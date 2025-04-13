<script setup lang="ts">
import { toPixel } from '@tb-dev/utils';
import type { SidebarProps } from './types';
import { computed, type CSSProperties, type VNode } from 'vue';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from '../__base/sidebar';

const props = defineProps<SidebarProps>();

defineSlots<{
  content?: () => VNode;
  default?: () => VNode;
  footer?: () => VNode;
  header?: () => VNode;
  inset?: () => VNode;
}>();

const sidebarStyle = computed(() => {
  const style: CSSProperties = {};
  if (props.width) style['--sidebar-width'] = toPixel(props.width);
  if (props.widthMobile) style['--sidebar-width-mobile'] = toPixel(props.widthMobile);
  return style;
});
</script>

<template>
  <SidebarProvider :default-open :style="sidebarStyle">
    <Sidebar :collapsible :side :variant>
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
