import type { Option } from '@tb-dev/utils';
import type { HTMLAttributes, InputHTMLAttributes } from 'vue';

export interface InputProps {
  autocomplete?: InputHTMLAttributes['autocomplete'];
  autofocus?: InputHTMLAttributes['autofocus'];
  class?: HTMLAttributes['class'];
  disabled?: InputHTMLAttributes['disabled'];
  label?: string;
  labelClass?: HTMLAttributes['class'];
  max?: InputHTMLAttributes['maxlength'];
  min?: InputHTMLAttributes['minlength'];
  modelValue: Option<string>;
  onBlur?: () => void;
  placeholder?: InputHTMLAttributes['placeholder'];
  readonly?: InputHTMLAttributes['readonly'];
  required?: InputHTMLAttributes['required'];
  size?: InputHTMLAttributes['size'];
  spellcheck?: InputHTMLAttributes['spellcheck'];
  style?: HTMLAttributes['style'];
  type?: InputHTMLAttributes['type'];
}
