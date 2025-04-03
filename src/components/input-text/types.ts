import type { Option } from '@tb-dev/utils';

export interface InputTextProps {
  class?: string;
  disabled?: boolean;
  max?: number;
  min?: number;
  modelValue: Option<string>;
  onBlur?: () => void;
  placeholder?: string;
  size?: number;
}
