import type { InputHTMLAttributes } from 'vue';

export interface InputTextProps {
  class?: string;
  disabled?: InputHTMLAttributes['disabled'];
  label?: string;
  labelClass?: string;
  max?: InputHTMLAttributes['maxlength'];
  min?: InputHTMLAttributes['minlength'];
  onBlur?: () => void;
  placeholder?: InputHTMLAttributes['placeholder'];
  size?: InputHTMLAttributes['size'];
  spellcheck?: InputHTMLAttributes['spellcheck'];
}
