import type { Option } from '@tb-dev/utils';

export interface InputNumberProps {
  defaultValue?: number;
  disabled?: boolean;
  formatOptions?: Intl.NumberFormatOptions;
  max?: number;
  min?: number;
  modelValue: Option<number>;
}
