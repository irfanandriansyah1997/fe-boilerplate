import { IMenu } from '../../../interface/component';
import { SIDEBAR_MENU_CODE_SPLITTING_SECTION } from '../../code-splitting/constant';
import { SIDEBAR_MENU_CONTEXT_SECTION } from '../../context/constant';
import { SIDEBAR_MENU_USE_MEMO_SECTION } from '../../use-memo/constant';

export const DEFAULT_LINK_SECTION: IMenu[] = [
  SIDEBAR_MENU_CODE_SPLITTING_SECTION,
  SIDEBAR_MENU_USE_MEMO_SECTION,
  SIDEBAR_MENU_CONTEXT_SECTION
];
