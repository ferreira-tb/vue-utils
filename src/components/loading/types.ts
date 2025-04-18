import type { Component, HTMLAttributes } from 'vue';

export interface LoadingProps {
  class?: HTMLAttributes['class'];
  icon?: Component;
  iconClass?: HTMLAttributes['class'];
}
