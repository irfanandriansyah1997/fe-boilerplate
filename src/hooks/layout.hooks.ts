import { useCallback, useLayoutEffect, useRef, useState } from 'react';

import {
  DEFAULT_MOBILE_SITE_MAXIMUM,
  DEFAULT_SMALL_DESKTOP_SITE_MAXIMUM,
  DEFAULT_TABLET_SITE_MAXIMUM
} from '../constant';
import { checkSizeBrowser } from '../helper';
import { ILayoutType } from './interface';

/**
 * Layout Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.24
 */
export const useLayout = (): ILayoutType | undefined => {
  const ref = useRef<boolean>();
  const [type, setType] = useState<ILayoutType | undefined>();

  const setTypeLayout = useCallback(() => {
    const [width] = checkSizeBrowser();

    if (ref.current) {
      if (width === 0 && type !== undefined) setType(undefined);
      else if (width <= DEFAULT_MOBILE_SITE_MAXIMUM) {
        if (type !== `mobile`) setType(`mobile`);
      } else if (width <= DEFAULT_TABLET_SITE_MAXIMUM) {
        if (type !== `tablet`) setType(`tablet`);
      } else if (width <= DEFAULT_SMALL_DESKTOP_SITE_MAXIMUM) {
        if (type !== `small-desktop`) setType(`small-desktop`);
      } else if (width > DEFAULT_SMALL_DESKTOP_SITE_MAXIMUM) {
        if (type !== `desktop`) setType(`desktop`);
      }
    }
  }, [type]);

  useLayoutEffect(() => {
    ref.current = true;
    setTypeLayout();

    window.addEventListener(`resize`, setTypeLayout);

    return () => {
      ref.current = false;
      window.removeEventListener(`resize`, setTypeLayout);
    };
  }, [setTypeLayout]);

  return type;
};
