import type { Component, HTMLAttributes } from 'vue';

export interface ButtonIconProps<T extends string> {
  buttonClass?: HTMLAttributes['class'];
  class?: HTMLAttributes['class'];
  icon: Component;
  iconClass?: HTMLAttributes['class'];
  iconSize?: number;
  to?: T;
}
