import type { HTMLAttributes } from 'vue';
import type { Option } from '@tb-dev/utils';
import type { NumberFieldRootProps } from 'reka-ui';

export interface InputNumberProps {
  class?: HTMLAttributes['class'];
  defaultValue?: number;
  disabled?: boolean;
  disableDecrement?: boolean;
  disableIncrement?: boolean;
  disableWheelChange?: NumberFieldRootProps['disableWheelChange'];
  formatOptions?: NumberFieldRootProps['formatOptions'];
  label?: string;
  labelClass?: HTMLAttributes['class'];
  max?: NumberFieldRootProps['max'];
  min?: NumberFieldRootProps['min'];
  modelValue: Option<number>;
  step?: NumberFieldRootProps['step'];
  stepSnapping?: NumberFieldRootProps['stepSnapping'];
  style?: HTMLAttributes['style'];
}
