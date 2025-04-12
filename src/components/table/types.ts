export interface TableProps {
  bodyClass?: string;
  captionClass?: string;
  footerClass?: string;
  headerClass?: string;
}

export interface TableLinkProps<T extends string> {
  label?: string;
  linkClass?: string;
  to: T;
}
