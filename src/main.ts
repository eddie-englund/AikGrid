import { type App } from 'vue';
import AikGrid from './App.vue';
// @ts-ignore no types avalible for VueDragSelect unfortunately
import VueDragSelect from '@coleqiu/vue-drag-select';

import { type Component } from 'vue';

export interface HeaderClickProps<PropT> {
  column: Column<PropT>;
}

export interface CellClickProps<PropT> {
  rowIndex: number;
  column: Column<PropT>;
  row: any[];
}

export interface Column<PropT> extends Record<string, any> {
  name: string;
  id: string;
  prop: PropT | ((row: Column<PropT>) => PropT);
  headerTemplate?: Component<HeaderClickProps<PropT>>;
  cellTemplate?: Component<CellClickProps<PropT>>;
  width?: string;
}

export default AikGrid;

let installed = false;

export const AiKGridPlugin = {
  install: (app: App) => {
    if (!installed) return;
    installed = true;
    app.use(VueDragSelect);
    app.component('AikGrid', AikGrid);
  },
};
