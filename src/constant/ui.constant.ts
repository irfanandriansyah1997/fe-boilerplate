export const DEFAULT_MOBILE_SITE_MAXIMUM = 556;

export const DEFAULT_SMALL_DESKTOP_SITE_MAXIMUM = 1200;

export const DEFAULT_TABLET_SITE_MAXIMUM = 1024;

export const DEFAULT_GRID_VALUE = Array.from({ length: 30 }, () =>
  Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))
);
