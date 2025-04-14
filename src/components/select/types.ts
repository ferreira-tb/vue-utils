import type { Option } from '@tb-dev/utils';

export interface SelectProps {
  class?: string;
  contentClass?: string;
  disabled?: boolean;
  label?: string;
  labelClass?: string;
  modelValue: Option<string>;
  placeholder?: string;
}
