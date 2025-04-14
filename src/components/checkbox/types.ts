import type { Option } from '@tb-dev/utils';

export interface CheckboxProps {
  class?: string;
  disabled?: boolean;
  label?: string;
  labelClass?: string;
  modelValue: Option<boolean>;
}
