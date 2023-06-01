import { type Column } from '../main';

export interface ColWithIndex<T> {
  column: Column<T>;
  rowIndex: number;
}

export const getSelectedColsFromIds = (
  rows: any[],
  selectedCols: ColWithIndex<any>[],
): unknown[] =>
  selectedCols.map(({ rowIndex, column }) => {
    if (rowIndex > rows.length)
      throw new Error('Selected col row index was greater than length of rows');

    const returnRow = rows[rowIndex][column.id];
    if (!returnRow)
      throw new Error(
        `Column with id '${column.id}' was not found on row '${rowIndex}''`,
      );

    return returnRow;
  });
