import { IMenu } from '../../../interface/component';

export const SIDEBAR_MENU_MEMO_SECTION: IMenu = {
  menu: [
    {
      text: `Memoize Component`,
      to: `/reducing-re-render/part-1`
    },
    {
      text: `Custom Comparator`,
      to: `/reducing-re-render/part-2`
    },
    {
      text: `Primitive Value`,
      to: `/reducing-re-render/part-3`
    }
  ],
  subtitle: `Implement memo for reducing re-render component`,
  title: `React.memo for reducing re-render`
};
