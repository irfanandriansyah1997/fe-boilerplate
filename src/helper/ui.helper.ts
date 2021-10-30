import { NullAble } from '../interface/general';

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

/**
 * Debounce Function
 * @param {(...args: any[]) => R} func - anonymous function will be called after timeout resolve
 * @param {number} delay - delay function
 * @returns {[(...args: any[]) => Promise<R>, () => void]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.29
 */
export function debounce<R = void>(
  func: (...args: any[]) => R,
  delay: number
): [(...args: any[]) => Promise<R>, () => void] {
  let timer: NullAble<NodeJS.Timeout>;

  /**
   * Remove Timer
   * @returns {void}
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.29
   */
  const removeTimer = (): void => {
    if (timer) {
      clearTimeout(timer);
    }
  };

  /**
   * Simulate Debounce
   * @returns {void}
   */
  function simulate(...args: any[]): Promise<R> {
    return new Promise((resolve) => {
      removeTimer();

      timer = setTimeout(() => {
        resolve(func(...args));
      }, delay);
    });
  }

  return [simulate, removeTimer];
}
