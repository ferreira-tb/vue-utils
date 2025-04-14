import type { CheckboxRootProps } from 'reka-ui';

export type CheckboxValue = CheckboxRootProps['modelValue'];

export interface CheckboxProps {
  defaultValue?: CheckboxRootProps['defaultValue'];
  disabled?: CheckboxRootProps['disabled'];
  label?: string;
  labelClass?: string;
}
