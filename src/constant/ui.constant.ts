export const DEFAULT_MOBILE_SITE_MAXIMUM = 556;

export const DEFAULT_SMALL_DESKTOP_SITE_MAXIMUM = 1200;

export const DEFAULT_TABLET_SITE_MAXIMUM = 1024;

export const DEFAULT_COLUMN = 30;

export const DEFAULT_ROW = 30;

export const DEFAULT_GRID_VALUE = Array.from({ length: DEFAULT_ROW }, () =>
  Array.from({ length: DEFAULT_COLUMN }, () => Math.floor(Math.random() * 100))
);
