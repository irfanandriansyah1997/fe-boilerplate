import { IMenu } from '../../../interface/component';

export const SIDEBAR_MENU_OPTIMIZE_CONTEXT_SECTION: IMenu = {
  menu: [
    {
      text: `Memoize Context`,
      to: `/optimize-context/part-1`
    },
    {
      text: `Separate Context`,
      to: `/optimize-context/part-2`
    }
  ],
  subtitle: `Prevent re-render cause context value change`,
  title: `Optimize Context Value`
};
