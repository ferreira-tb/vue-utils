import type { HTMLAttributes } from 'vue';

export interface SwitchProps {
  class?: HTMLAttributes['class'];
  disabled?: boolean;
  label?: string;
  labelClass?: HTMLAttributes['class'];
  position?: 'after' | 'before';
  style?: HTMLAttributes['style'];
}
