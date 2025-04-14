import type { Option } from '@tb-dev/utils';
import type { CheckboxValue } from './types';

export function toBooleanCheckboxValue(value: Option<CheckboxValue>): boolean {
  return value === true;
}
