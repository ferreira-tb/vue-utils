import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export * from './app';
export * from './error';
export * from './maybe';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
