import type { HTMLAttributes } from 'vue';

export interface CardProps {
  contentClass?: HTMLAttributes['class'];
  descriptionClass?: HTMLAttributes['class'];
  footerClass?: HTMLAttributes['class'];
  headerClass?: HTMLAttributes['class'];
  scrollAreaClass?: HTMLAttributes['class'];
  scrollAreaHeight?: number | string;
  titleClass?: HTMLAttributes['class'];
}
