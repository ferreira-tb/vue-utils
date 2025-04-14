<script setup lang="ts">
import { Input } from '../input';
import type { Option } from '@tb-dev/utils';
import type { InputTextProps } from './types';

defineOptions({
  inheritAttrs: false,
});

withDefaults(defineProps<InputTextProps>(), {
  spellcheck: 'false',
});

const value = defineModel<Option<string>>({ required: true });
</script>

<template>
  <Input
    v-model="value"
    type="text"
    :autocomplete
    :autofocus
    :disabled
    :label
    :label-class
    :max
    :min
    :on-blur
    :placeholder
    :readonly
    :required
    :size
    :spellcheck
    :style
  />
</template>
