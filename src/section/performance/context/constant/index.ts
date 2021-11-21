import { IMenu } from '../../../../interface/component';

export const ACTION_SET_TEXT = `TYPE_DOG_INPUT`;

export const ACTION_UPDATE_GRID_CELL = `UPDATE_GRID_CELL`;

export const ACTION_UPDATE_GRID = `UPDATE_GRID`;

export const SIDEBAR_MENU_CONTEXT_SECTION: IMenu = {
  menu: [
    {
      text: `Wrap Use Memo`,
      to: `/context/part-1`
    },
    {
      text: `Separate Context Value`,
      to: `/context/part-2`
    },
    {
      text: `Colocate State`,
      to: `/context/part-3`
    },
    {
      text: `Separate Context Dog Name`,
      to: `/context/part-4`
    },
    {
      text: `Memoized Cell Component`,
      to: `/context/part-5`
    },
    {
      text: `Refactor To Recoil`,
      to: `/context/part-6`
    }
  ],
  subtitle: `Cheat Sheet Optimize Context Value Prevent Unused Re-render`,
  title: `🎩 Optimize Context Value`
};
