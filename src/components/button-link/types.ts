import type { HTMLAttributes } from 'vue';
import type { Option } from '@tb-dev/utils';
import type { ButtonSize, ButtonVariant } from '../button';

export interface ButtonLinkProps<T extends string> {
  buttonClass?: HTMLAttributes['class'];
  disabled?: Option<boolean>;
  label?: string;
  size?: ButtonSize;
  style?: HTMLAttributes['style'];
  to: T;
  variant?: ButtonVariant;
}
