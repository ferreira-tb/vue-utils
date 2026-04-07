import { defineConfig } from '@tb-dev/eslint-config';

export default defineConfig({
  project: ['./tsconfig.json'],
  features: {
    perfectionist: true,
    unicorn: true,
  },
  overrides: {
    typescript: {
      'no-explicit-any': 'off',
      'no-non-null-assertion': 'off',
    },
  },
});
