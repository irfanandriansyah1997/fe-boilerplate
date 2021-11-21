import { IMenu } from '../../../../interface/component';

export const SIDEBAR_MENU_CACHE_RESOURCE: IMenu = {
  menu: [
    {
      text: `Cache an Object`,
      to: `/cache-resource/part-1`
    },
    {
      text: `Put Cache in Context`,
      to: `/cache-resource/part-2`
    },
    {
      text: `Create Sample Context Provider`,
      to: `/cache-resource/part-3`
    },
    {
      text: `Add Cache Timeout`,
      to: `/cache-resource/part-4`
    }
  ],
  subtitle: `Implement caching for prevent get data from external resource`,
  title: `💾 Cache Resource`
};
