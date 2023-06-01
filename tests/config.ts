import type { Column } from './../src/main';

interface ColRow {
  columns: Column<string>[];
  rows: any[];
}

export const FourRowsFourCols: ColRow = {
  columns: [
    {
      name: 'item 1',
      prop: row => row.myCustomField.text,
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

export const FourColumnsTwoRows: ColRow = {
  columns: FourRowsFourCols.columns,
  rows: [FourRowsFourCols.rows[0], FourRowsFourCols.rows[1]],
};
