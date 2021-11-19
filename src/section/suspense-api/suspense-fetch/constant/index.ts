import { IMenu } from '../../../../interface/component';

export const SIDEBAR_MENU_SUSPENSE_FETCH: IMenu = {
  menu: [
    {
      text: `Simple Fetch `,
      to: `/suspense-fetch/part-1`
    },
    {
      text: `Error Handling Fetch API`,
      to: `/suspense-fetch/part-2`
    },
    {
      text: `Encapsulate To More Generic Method`,
      to: `/suspense-fetch/part-3`
    }
  ],
  subtitle: `Simulate Suspense API Without React Lazy Load`,
  title: `✨ React Suspense & Fetch API`
};
