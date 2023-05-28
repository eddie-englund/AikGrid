import { type DefineComponent, type FunctionalComponent } from 'vue';

export interface Column<PropT> extends Record<string, any> {
  name: string;
  id: string;
  prop: PropT | ((row: Column<PropT>) => PropT);
  headerTemplate?: (row: Column<PropT[]>) => any;
  cellTemplate?: any;
  width?: string;
}
