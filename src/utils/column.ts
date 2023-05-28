import { type FunctionalComponent } from 'vue';

export interface Column<PropT> extends Record<string, any>{
  name: string;
  id: string;
  prop: PropT | ((row: Column<PropT>) => PropT);
  headerTemplate?: (row: Column<PropT[]>) => FunctionalComponent;
  cellTemplate?: (row: Column<PropT[]>) => FunctionalComponent;
  width?: string;
}