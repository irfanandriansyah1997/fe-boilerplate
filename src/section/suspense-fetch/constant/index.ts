import { IMenu } from '../../../interface/component';

export const ACTION_SET_TEXT = `TYPE_DOG_INPUT`;

export const ACTION_UPDATE_GRID_CELL = `UPDATE_GRID_CELL`;

export const ACTION_UPDATE_GRID = `UPDATE_GRID`;

export const SIDEBAR_MENU_SUSPENSE_FETCH: IMenu = {
  menu: [
    {
      text: `Simple Fetch `,
      to: `/suspense-fetch/part-1`
    }
  ],
  subtitle: `lorem ipsum dolor sim amet`,
  title: `✨ React Suspense & Fetch API`
};
