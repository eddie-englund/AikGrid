import { FourRowsFourCols, FourColumnsTwoRows } from './config';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AikGrid from '../src/App.vue';

describe('AikGird', () => {
  it('renders with 4 cols', () => {
    const wrapper = mount(AikGrid, {
      props: {
        columns: FourRowsFourCols.columns,
        rows: FourRowsFourCols.rows,
      },
    });
    expect(wrapper.findAll('.aik-header-cell').length).toBe(4);
  });

  it('renders wth 4 rows', () => {
    const wrapper = mount(AikGrid, {
      props: {
        columns: FourRowsFourCols.columns,
        rows: FourRowsFourCols.rows,
      },
    });
    expect(wrapper.findAll('.aik-row').length).toBe(4);
  });

  it('renders wth 4 cols and 2 rows', () => {
    const wrapper = mount(AikGrid, {
      props: {
        columns: FourColumnsTwoRows.columns,
        rows: FourColumnsTwoRows.rows,
      },
    });
    expect(wrapper.findAll('.aik-header-cell').length).toBe(4);
    expect(wrapper.findAll('.aik-row').length).toBe(2);
  });

  it('has a headerClick event which returns the column', async () => {
    const wrapper = mount(AikGrid, {
      props: {
        columns: FourRowsFourCols.columns,
        rows: FourRowsFourCols.rows,
      },
    });

    await wrapper.find('.aik-header-cell-item').trigger('click');

    expect(wrapper.emitted()['headerClick'][0][0]).toMatchObject(
      FourRowsFourCols.columns[0],
    );
  });

  it('has a cellClick event which returns the column pressed and the index of the row', async () => {
    const wrapper = mount(AikGrid, {
      props: {
        columns: FourRowsFourCols.columns,
        rows: FourRowsFourCols.rows,
      },
    });

    await wrapper.find('.aik-cell-item').trigger('click');

    const evt = wrapper.emitted()['cellClick'][0];

    // First arg should be the column def
    expect(evt[0]).toMatchObject(FourRowsFourCols.columns[0]);

    // Second arg should be the row itself
    expect(evt[1]).toMatchObject(FourRowsFourCols.rows[0]);

    // Third arg should be the index of the row
    expect(evt[2]).toBe(0);
  });

  it('Clicking the same cell twice should result in the same return values', async () => {
    const wrapper = mount(AikGrid, {
      props: {
        columns: FourRowsFourCols.columns,
        rows: FourRowsFourCols.rows,
      },
    });

    await wrapper.find('.aik-cell-item').trigger('click');
    await wrapper.find('.aik-cell-item').trigger('click');

    const evt = wrapper.emitted()['cellClick'][0];
    const evt2 = wrapper.emitted()['cellClick'][1];

    expect(evt).toMatchObject(evt2);
  });

  it('Clicking the same header twice should result in the same return values', async () => {
    const wrapper = mount(AikGrid, {
      props: {
        columns: FourRowsFourCols.columns,
        rows: FourRowsFourCols.rows,
      },
    });

    await wrapper.find('.aik-header-cell-item').trigger('click');
    await wrapper.find('.aik-header-cell-item').trigger('click');

    const evt = wrapper.emitted()['headerClick'][0];
    const evt2 = wrapper.emitted()['headerClick'][1];

    expect(evt).toMatchObject(evt2);
  });
});
