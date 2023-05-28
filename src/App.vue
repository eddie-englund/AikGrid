<script setup lang="ts">
// TODO: Add generics when Volar adds support
import type { Column } from '@/utils/column';
import { v4 as uuid } from 'uuid';

const { rows, columns } = defineProps<{
  columns: Column<any>[];
  rows: any[];
}>();

const emit = defineEmits<{
  (e: 'header-click', column: Column<any>): void;
  (e: 'cell-click', column: Column<any>, row: any[], rowIndex: number): void;
}>();

const defaultWidth = (width?: string): string => width ?? '6rem';

// we give the grid a unique id to allow for multiple
// instances of the grid to live at the same time
const gridId = uuid();
</script>

<template>
  <div :id="`aik-grid-${gridId}`" class="aik-container">
    <header class="aik-headers-container">
      <div
        v-for="column in columns"
        :key="column.id"
        class="aik-header-cell"
        :class="`aik-header-cell-${column.id}`"
        :style="`width: ${defaultWidth(column.width)}`"
        @click="emit(`header-click`, column)"
      >
        <component :is="column.headerTemplate" v-if="column.headerTemplate" />
        <h3 v-else>{{ column.name }}</h3>
      </div>
    </header>
    <div class="aik-body">
      <div v-for="(row, index) in rows" :key="index" class="aik-row">
        <div
          v-for="column in columns"
          :key="column.id"
          class="aik-cell"
          :class="`aik-cell-${column.id}`"
          :style="`width: ${defaultWidth(column.width)}`"
          @click="emit('cell-click', column, row, index)"
        >
          <component :is="column.cellTemplate" v-if="column.cellTemplate" />
          <p v-else>
            {{
              typeof column.prop === 'function'
                ? column.prop(row)
                : row[column.prop]
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aik-container header {
  display: flex;
  gap: 1rem;

  .aik-header-cell {
    padding: 0;
    overflow: hidden;
  }
}

.aik-container .aik-row {
  display: flex;
  gap: 1rem;

  .aik-cell {
    text-overflow: ellipsis;
    height: 1.2em;

    p {
      width: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
