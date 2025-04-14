import type { Option } from '@tb-dev/utils';
import type { InputHTMLAttributes } from 'vue';

export interface InputProps {
  class?: string;
  disabled?: InputHTMLAttributes['disabled'];
  label?: string;
  labelClass?: string;
  max?: InputHTMLAttributes['maxlength'];
  min?: InputHTMLAttributes['minlength'];
  modelValue: Option<string>;
  onBlur?: () => void;
  placeholder?: InputHTMLAttributes['placeholder'];
  size?: InputHTMLAttributes['size'];
  spellcheck?: InputHTMLAttributes['spellcheck'];
  type?: InputHTMLAttributes['type'];
}
