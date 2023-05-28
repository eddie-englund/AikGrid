<script lang="ts" setup>
import AiKGrid from '../App.vue';

const FourRowsFourCols = {
  columns: [
    {
      name: 'item 1',
      prop: (row: any) => row!.myCustomField!.text,
      id: 'item',
    },
    {
      name: 'item 2',
      prop: 'item2',
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
      item2: 'Im item two',
      item3: "I'm item three",
      item4: "I'm item four",
    },
    {
      item: "I'm an item",
      myCustomField: { text: 'I am a custom field' },
      item2: 'Im item two',
      item3: "I'm item three",
      item4: "I'm item four",
    },
    {
      item: "I'm an item",
      myCustomField: { text: 'I am a custom field' },
      item2: 'Im item two',
      item3: "I'm item three",
      item4: "I'm item four",
    },
    {
      item: "I'm an item",
      myCustomField: { text: 'I am a custom field' },
      item2: 'Im item two',
      item3: "I'm item three",
      item4: "I'm item four",
    },
  ],
};
</script>

<template>
  <AiKGrid :columns="FourRowsFourCols.columns" :rows="FourRowsFourCols.rows" />
</template>
