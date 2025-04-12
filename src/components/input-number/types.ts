import type { Option } from '@tb-dev/utils';

export interface InputNumberProps {
  class?: string;
  defaultValue?: number;
  disabled?: boolean;
  formatOptions?: Intl.NumberFormatOptions;
  label?: string;
  labelClass?: string;
  max?: number;
  min?: number;
  modelValue: Option<number>;
}
