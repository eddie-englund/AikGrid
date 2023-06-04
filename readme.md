# AikGrid

AikGrid is what I wanted revogrid to be.

`UNDER ACTIVE DEVELOPMENT`

## Installation

With npm

```bash
$npm i aikgrid
```

With yarn

```bash
$yarn add aikgrid
```

With pnpm

```bash
$pnpm add aikgrid
```

## Usage

Example:

```html
<script lang=ts setup>
import AikGrid from 'aikgrid';

const FourColsOneRow = {
  columns: [
    {
      name: 'item 1',
      prop: (row: { myCustomField: { text: string }}) => row.myCustomField.text,
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
  ],
};
</script>

<template>
  <aik-grid
    :columns="FourColsOneRow.columns"
    :rows="FourColsOneRow.rows"
    @headerClick="(column) =>  handleHeaderClick(column)"
    @cellClick="({ column, row, rowIndex }) => handleHeaderClick(column, row, rowIndex)"
    @dragSelectUpdate="(update)"
  />
</template>
```

## Styling

Avalible classes:

- `.drag-select-option--selected` - the active state of items that are currently drag selected
- `.aik-headers-container` - the header wrapper
- `.aik-header-cell` - target the header cells
- `.aik-header-cell-${column.id}` - target specific header cells by changing the js template to your coulmn id
- `.aik-row` - the entire row wrapper
- `.aik-cell` - target row cells
- `.aik-cell-${column.id}` - target specific cells by changing the js template to your coulmn id

## Events

- `@cellClick` - Is called when a cell is clicked
  - returns an object of the below type

```ts
{
  column: Column<any>;
  row: Record<string, any>;
  rowIndex: number;
}
```

- `@headerClick` - is called when a header cell is clicked
  - returns the column of the header clicked
```ts
column: Column<PropT>;
```

- `dragSelectUpdate` - called whenever the selection changes
  - returns an array of objects which consist of the column ids and the row of the selected column
```ts
DragSelectEmit {
  columnId: string;
  rowIndex: number;
}[]
```
Could not find a declaration file for module 'aikgrid'. 'C:/Users/Titus/code/aikgrid-test/node_modules/.pnpm/aikgrid@0.2.6_typescript@5.0.4/node_modules/aikgrid/dist/aik-grid.es.js' implicitly has an 'any' type. There are types at 'c:/Users/Titus/code/aikgrid-test/, but this result could not be resolved when respecting package.json "exports". The 'aikgrid' library may need to update its package.json or typings.