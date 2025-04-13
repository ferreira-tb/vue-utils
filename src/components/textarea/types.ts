import type { Option } from '@tb-dev/utils';

export interface TextareaProps {
  autocapitalize?: boolean;
  autofocus?: boolean;
  class?: string;
  cols?: number;
  disabled?: boolean;
  label?: string;
  labelClass?: string;
  max?: number;
  min?: number;
  modelValue: Option<string>;
  onBlur?: () => void;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
}
