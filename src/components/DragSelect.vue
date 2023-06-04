<script lang="ts" setup>
import { type Ref } from 'vue';
// @ts-ignore doesn't provide any types :(
import { DragSelect } from '@coleqiu/vue-drag-select';

const props = defineProps<{ modelValue: string[] }>();
const emit = defineEmits<{
  'update:modelValue': [modelValue: string[]];
}>();
</script>

<template>
  <drag-select
    :model-value="props.modelValue as unknown as undefined"
    class="aik-body"
    selected-option-class="aik-cell--selected"
    @update:model-value="emit('update:modelValue', $event as string[])"
  >
    <slot />
  </drag-select>
</template>
