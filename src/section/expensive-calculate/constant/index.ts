import { IMenu } from '../../../interface/component';

export const SIDEBAR_MENU_EXPENSIVE_SECTION: IMenu = {
  menu: [
    {
      text: `useMemo exercise`,
      to: `/expensive-calculate/part-1`
    },
    {
      text: `Get data using web worker`,
      to: `/expensive-calculate/part-2`
    }
  ],
  subtitle: `Prevent expensive calculation when force re-render`,
  title: `Use Memo Expensive Calculation`
};
