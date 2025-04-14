import type { Option } from '@tb-dev/utils';
import type { NumberFieldRootProps } from 'reka-ui';

export interface InputNumberProps {
  class?: string;
  defaultValue?: number;
  disabled?: boolean;
  disableDecrement?: boolean;
  disableIncrement?: boolean;
  disableWheelChange?: NumberFieldRootProps['disableWheelChange'];
  formatOptions?: NumberFieldRootProps['formatOptions'];
  label?: string;
  labelClass?: string;
  max?: NumberFieldRootProps['max'];
  min?: NumberFieldRootProps['min'];
  modelValue: Option<number>;
  step?: NumberFieldRootProps['step'];
  stepSnapping?: NumberFieldRootProps['stepSnapping'];
}
