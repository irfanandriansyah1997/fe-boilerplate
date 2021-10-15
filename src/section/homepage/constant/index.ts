import { IMenu } from '../../../interface/component';
import { SIDEBAR_MENU_CODE_SPLITTING_SECTION } from '../../code-splitting/constant';
import { SIDEBAR_MENU_EXPENSIVE_SECTION } from '../../expensive-calculate/constant';
import { SIDEBAR_MENU_OPTIMIZE_CONTEXT_SECTION } from '../../optimize-context/constant';
import { SIDEBAR_MENU_MEMO_SECTION } from '../../react-memo/constant';

export const DEFAULT_LINK_SECTION: IMenu[] = [
  SIDEBAR_MENU_CODE_SPLITTING_SECTION,
  SIDEBAR_MENU_EXPENSIVE_SECTION,
  SIDEBAR_MENU_MEMO_SECTION,
  SIDEBAR_MENU_OPTIMIZE_CONTEXT_SECTION
];
