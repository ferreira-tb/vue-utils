import { defineConfig } from '@tb-dev/eslint-config';

export default defineConfig({
  project: ['./tsconfig.json'],
  ignores: ['**/components/__base/*'],
  features: {
    perfectionist: true,
    tailwind: false,
    unicorn: true,
    vue: true,
  },
  overrides: {
    typescript: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
});
