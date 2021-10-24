/**
 * Check Size Browser
 * @returns {[number, number]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.24
 */
export const checkSizeBrowser = (): [number, number] => {
  if (typeof window !== undefined)
    return [window.innerWidth, window.innerHeight];

  return [0, 0];
};
