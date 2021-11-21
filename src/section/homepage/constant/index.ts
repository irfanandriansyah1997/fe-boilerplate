import { IMenu } from '../../../interface/component';
import { SIDEBAR_MENU_CODE_SPLITTING_SECTION } from '../../performance/code-splitting/constant';
import { SIDEBAR_MENU_CONTEXT_SECTION } from '../../performance/context/constant';
import { SIDEBAR_MENU_USE_MEMO_SECTION } from '../../performance/use-memo/constant';
import { SIDEBAR_MENU_CACHE_RESOURCE } from '../../suspense-api/cache-resource/constant';
import { SIDEBAR_MENU_RENDER_AS_YOU_FETCH } from '../../suspense-api/render-as-you-fetch/constant';
import { SIDEBAR_MENU_SUSPENSE_FETCH } from '../../suspense-api/suspense-fetch/constant';

export const DEFAULT_LINK_PERFORMANCE_SECTION: IMenu[] = [
  SIDEBAR_MENU_CODE_SPLITTING_SECTION,
  SIDEBAR_MENU_USE_MEMO_SECTION,
  SIDEBAR_MENU_CONTEXT_SECTION
];

export const DEFAULT_LINK_SUSPENSE_SECTION: IMenu[] = [
  SIDEBAR_MENU_SUSPENSE_FETCH,
  SIDEBAR_MENU_RENDER_AS_YOU_FETCH,
  SIDEBAR_MENU_CACHE_RESOURCE
];
