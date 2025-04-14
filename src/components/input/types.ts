import type { Option } from '@tb-dev/utils';
import type { InputHTMLAttributes } from 'vue';

export interface InputProps {
  autocomplete?: InputHTMLAttributes['autocomplete'];
  autofocus?: InputHTMLAttributes['autofocus'];
  class?: string;
  disabled?: InputHTMLAttributes['disabled'];
  label?: string;
  labelClass?: string;
  max?: InputHTMLAttributes['maxlength'];
  min?: InputHTMLAttributes['minlength'];
  modelValue: Option<string>;
  onBlur?: () => void;
  placeholder?: InputHTMLAttributes['placeholder'];
  readonly?: InputHTMLAttributes['readonly'];
  required?: InputHTMLAttributes['required'];
  size?: InputHTMLAttributes['size'];
  spellcheck?: InputHTMLAttributes['spellcheck'];
  type?: InputHTMLAttributes['type'];
}
