export interface TableLinkProps<T extends string> {
  label?: string;
  linkClass?: string;
  to: T;
}
