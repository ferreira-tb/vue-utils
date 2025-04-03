import type { Option } from '@tb-dev/utils';
import type { ButtonSize, ButtonVariant } from '../button';

export interface ButtonLinkProps<T extends string> {
  buttonClass?: string;
  disabled?: Option<boolean>;
  label?: string;
  size?: ButtonSize;
  to: T;
  variant?: ButtonVariant;
}
