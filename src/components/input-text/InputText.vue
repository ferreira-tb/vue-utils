<!-- eslint-disable @typescript-eslint/no-unsafe-member-access -->
<!-- eslint-disable @typescript-eslint/no-unsafe-call -->
<script setup lang="ts">
import { Input } from '../input';
import type { Option } from '@tb-dev/utils';
import type { InputTextProps } from './types';
import { computed, useTemplateRef } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<InputTextProps>(), {
  spellcheck: 'false',
});

const value = defineModel<Option<string>>({ required: true });

const inputComponent = useTemplateRef('inputComponent');
const inputEl = computed(() => inputComponent.value?.inputEl);

function focus() {
  inputEl.value?.focus();
}

function blur() {
  inputEl.value?.blur();
}

function select() {
  inputEl.value?.select();
}

defineExpose({ inputEl, focus, blur, select });
</script>

<template>
  <Input
    ref="inputComponent"
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
    :class="props.class"
  />
</template>
