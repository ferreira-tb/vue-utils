import type { InputHTMLAttributes } from 'vue';

export interface InputTextProps {
  autocomplete?: InputHTMLAttributes['autocomplete'];
  autofocus?: InputHTMLAttributes['autofocus'];
  disabled?: InputHTMLAttributes['disabled'];
  label?: string;
  labelClass?: string;
  max?: InputHTMLAttributes['maxlength'];
  min?: InputHTMLAttributes['minlength'];
  onBlur?: () => void;
  placeholder?: InputHTMLAttributes['placeholder'];
  readonly?: InputHTMLAttributes['readonly'];
  required?: InputHTMLAttributes['required'];
  size?: InputHTMLAttributes['size'];
  spellcheck?: InputHTMLAttributes['spellcheck'];
}
