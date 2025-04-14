import type { Option } from '@tb-dev/utils';
import type { HTMLAttributes, SelectHTMLAttributes } from 'vue';

export interface SelectProps {
  autocomplete?: SelectHTMLAttributes['autocomplete'];
  autofocus?: SelectHTMLAttributes['autofocus'];
  class?: HTMLAttributes['class'];
  contentClass?: HTMLAttributes['class'];
  disabled?: boolean;
  label?: string;
  labelClass?: HTMLAttributes['class'];
  modelValue: Option<string>;
  placeholder?: string;
  required?: boolean;
  style?: HTMLAttributes['style'];
  triggerClass?: HTMLAttributes['class'];
}
