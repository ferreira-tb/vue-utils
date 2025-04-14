import type { HTMLAttributes } from 'vue';
import type { CheckboxRootProps } from 'reka-ui';

export type CheckboxValue = CheckboxRootProps['modelValue'];

export interface CheckboxProps {
  class?: HTMLAttributes['class'];
  defaultValue?: CheckboxRootProps['defaultValue'];
  disabled?: CheckboxRootProps['disabled'];
  label?: string;
  labelClass?: string;
  style?: HTMLAttributes['style'];
}
