import type { SidebarProps as Props } from '../__base/sidebar';

export interface SidebarProps {
  collapsible?: Props['collapsible'];
  defaultOpen?: boolean;
  side?: Props['side'];
  variant?: Props['variant'];
  width?: string | number;
  widthMobile?: string | number;
}
