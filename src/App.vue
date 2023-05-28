<script setup lang="ts">
// TODO: Add generics when Volar adds support
import type { Column } from '@/utils/column';
import { v4 as uuid } from 'uuid';
import { ref, watch } from 'vue';
// @ts-ignore
import { DragSelect, DragSelectOption } from '@coleqiu/vue-drag-select';

const { rows, columns } = defineProps<{
  columns: Column<any>[];
  rows: any[];
}>();

const emit = defineEmits<{
  (e: 'header-click', column: Column<any>): void;
  (e: 'cell-click', column: Column<any>, row: any[], rowIndex: number): void;
  (e: 'select:update', columns: Column<any>, rowIndex: number): void;
}>();

const defaultWidth = (width?: string): string => width ?? '6rem';
const selection = ref([]);
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
    <drag-select
      v-model="selection"
      class="aik-body"
      selected-option-class="aik-cell--selected"
      :selected-option-style="{ background: 'red' }"
    >
      <div v-for="(row, index) in rows" :key="index" class="aik-row">
        <drag-select-option
          v-for="column in columns"
          :key="column.id"
          class="aik-cell"
          :class="`aik-cell-${column.id}`"
          :style="`width: ${defaultWidth(column.width)}`"
          :value="column.id + index"
          @click="emit('cell-click', column, row, index)"
        >
          <component
            :is="column.cellTemplate"
            v-if="column.cellTemplate"
            :column="column"
            :row="row"
            :row-index="index"
          />
          <p v-else>
            {{
              typeof column.prop === 'function'
                ? column.prop(row)
                : row[column.prop]
            }}
          </p>
        </drag-select-option>
      </div>
    </drag-select>
  </div>
</template>

<style lang="scss" scoped>
.aik-container,
.aik-container::before,
.aik-container::after {
  box-sizing: border-box;
}

.aik-container {
  .drag-select__wrapper {
    width: 800px;
  }
  h3,
  h2,
  h1,
  p {
    margin: 0;
  }
}
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
  min-height: 100%;
  padding: 0.1rem;

  .aik-cell {
    text-overflow: ellipsis;
    height: 1.2rem;

    p {
      width: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.drag-select-option--selected {
  border: 1px solid red;
}
</style>
