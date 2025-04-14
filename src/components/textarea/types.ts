import type { Option } from '@tb-dev/utils';
import type { HTMLAttributes, TextareaHTMLAttributes } from 'vue';

export interface TextareaProps {
  autocapitalize?: TextareaHTMLAttributes['autocapitalize'];
  autocomplete?: TextareaHTMLAttributes['autocomplete'];
  autocorrect?: TextareaHTMLAttributes['autocorrect'];
  autofocus?: TextareaHTMLAttributes['autofocus'];
  class?: HTMLAttributes['class'];
  cols?: TextareaHTMLAttributes['cols'];
  disabled?: boolean;
  label?: string;
  labelClass?: HTMLAttributes['class'];
  max?: TextareaHTMLAttributes['maxlength'];
  min?: TextareaHTMLAttributes['minlength'];
  modelValue: Option<string>;
  onBlur?: () => void;
  placeholder?: TextareaHTMLAttributes['placeholder'];
  readonly?: TextareaHTMLAttributes['readonly'];
  required?: TextareaHTMLAttributes['required'];
  rows?: TextareaHTMLAttributes['rows'];
  spellcheck?: TextareaHTMLAttributes['spellcheck'];
  style?: HTMLAttributes['style'];
}
