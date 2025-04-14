<script setup lang="ts">
import { Input } from '../input';
import type { Option } from '@tb-dev/utils';
import type { InputTextProps } from './types';

const props = withDefaults(defineProps<InputTextProps>(), {
  spellcheck: 'false',
});

const value = defineModel<Option<string>>({ required: true });
</script>

<template>
  <Input
    v-model="value"
    type="text"
    :class="props.class"
    :disabled
    :label
    :label-class
    :max
    :min
    :on-blur
    :placeholder
    :size
    :spellcheck
  />
</template>
