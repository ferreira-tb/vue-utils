import { defineConfig } from '@tb-dev/eslint-config';

export default defineConfig({
  project: ['./tsconfig.json'],
  features: {
    perfectionist: true,
    unicorn: true,
  },
  overrides: {
    typescript: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
});
