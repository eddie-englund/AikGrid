<script lang="ts" setup>
import type { Column } from '@/utils/column';
import AiKGrid from '../App.vue';
import EyeColor from '../components/EyeColor.vue';

const handleCellClick = (col: any, row: any[], index: number) =>
  console.log('cell click', col, row, index);
const handleHeaderClick = (evt: any) => console.log('header click', evt);

type owo = typeof EyeColor;

interface ColRow {
  columns: Column<any>[];
  rows: any[];
}

const FourRowsFourCols: ColRow = {
  columns: [
    {
      name: 'item 1',
      prop: (row: any) => row!.myCustomField!.text,
      id: 'item',
    },
    {
      name: 'item 2',
      prop: 'item2',
      cellTemplate: EyeColor,
      id: 'item2',
    },
    {
      name: 'item 3',
      prop: 'item3',
      id: 'item3',
    },
    {
      name: 'item 4',
      prop: 'item4',
      id: 'item4',
    },
  ],
  rows: [
    {
      item: "I'm an item",
      myCustomField: { text: 'I am a custom field' },
      item2: 'green',
      item3: "I'm item three",
      item4: "I'm item four",
    },
    {
      item: "I'm an item",
      myCustomField: { text: 'I am a custom field' },
      item2: 'red',
      item3: "I'm item three",
      item4: "I'm item four",
    },
    {
      item: "I'm an item",
      myCustomField: { text: 'I am a custom field' },
      item2: 'blue',
      item3: "I'm item three",
      item4: "I'm item four",
    },
    {
      item: "I'm an item",
      myCustomField: { text: 'I am a custom field' },
      item2: 'green',
      item3: "I'm item three",
      item4: "I'm item four",
    },
  ],
};
</script>

<template>
  <AiKGrid
    :columns="FourRowsFourCols.columns"
    :rows="FourRowsFourCols.rows"
    @header-click="handleHeaderClick"
    @cell-click="(col, row, index) => handleCellClick(col, row, index)"
  />
</template>
