import { IMenu } from '../../../../interface/component';

export const SIDEBAR_MENU_SUSPENSE_IMAGE: IMenu = {
  menu: [
    {
      text: `Suspend an Image Component`,
      to: `/suspense-image/part-1`
    },
    {
      text: `Avoid Waterfall Load Data`,
      to: `/suspense-image/part-2`
    },
    {
      text: `Render as You Fetch`,
      to: `/suspense-image/part-3`
    }
  ],
  subtitle: `Caching Image & Prevent Waterfall Load All Asset Include Fetch API`,
  title: `📈 Suspense Image`
};
