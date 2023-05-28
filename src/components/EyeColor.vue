<script lang="ts" setup>
import type { Column } from '@/utils/column';

const { column, row, rowIndex } = defineProps<{
  column: Column<any>;
  row: any;
  rowIndex: number;
}>();
</script>

<template>
  <div
    class="eye-color-container"
    :class="`eye-${
      typeof column.prop === 'function' ? column.prop(row) : row[column.prop]
    }`"
  >
    <p>
      {{
        typeof column.prop === 'function' ? column.prop(row) : row[column.prop]
      }}
    </p>
  </div>
</template>

<style lang="scss">
.eye-color-container {
  p {
    margin: 0;
    padding: 0;
    width: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.eye-green {
  background: green;
}

.eye-red {
  background: blue;
}

.eye-blue {
  background: red;
}
</style>
