import type { Component } from 'vue';

export interface ButtonIconProps<T extends string> {
  buttonClass?: string;
  class?: string;
  icon: Component;
  iconClass?: string;
  iconSize?: number;
  to?: T;
}
