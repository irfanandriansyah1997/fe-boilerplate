import { ISidebarProps } from '../../../components/organisms/sidebar/interface';

export const SIDEBAR_MENU_CODE_SPLITTING_SECTION: ISidebarProps = {
  menu: [
    {
      text: `Basic Code Splitting`,
      to: `/code-splitting/part-1`
    },
    {
      text: `Eager Load Code Splitting`,
      to: `/code-splitting/part-2`
    },
    {
      text: `Webpack Magic Comment`,
      to: `/code-splitting/part-3`
    }
  ],
  subtitle: `Cheat Sheet Implement Code Splitting On React JS`,
  title: `Code Splitting`
};
