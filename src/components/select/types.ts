import type { Option } from '@tb-dev/utils';
import type { SelectHTMLAttributes } from 'vue';

export interface SelectProps {
  autocomplete?: SelectHTMLAttributes['autocomplete'];
  autofocus?: SelectHTMLAttributes['autofocus'];
  class?: string;
  contentClass?: string;
  disabled?: boolean;
  label?: string;
  labelClass?: string;
  modelValue: Option<string>;
  placeholder?: string;
  required?: boolean;
  triggerClass?: string;
}
