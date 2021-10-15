import { verifiedIsNotEmpty } from '@99/helper';

import { ICacheHooks } from './interface';

/**
 * Cache Hooks
 * @param {string} key - key cache
 * @returns {Promise<Record<string, any> | undefined>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
export const appsCache = (): ICacheHooks => {
  /**
   * Get Cache
   * @param {string} key - key cache
   * @returns {Promise<undefined | string>}
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.15
   */
  const getCache = async (key: string): Promise<string | undefined> => {
    try {
      const response = localStorage.getItem(key);

      return response || undefined;
    } catch {
      return undefined;
    }
  };

  /**
   * Delete Cache
   * @param {string} key - key cache
   * @returns {Promise<void>}
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.15
   */
  const deleteCache = async (key: string): Promise<void> => {
    localStorage.removeItem(key);
  };

  /**
   * Save Cache
   * @param {string} key - key cache
   * @param {string} data - payload data want to save into cache
   * @returns {Promise<Record<string, any> | undefined>}
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.15
   */
  const saveCache = async (key: string, data: string): Promise<void> => {
    if (verifiedIsNotEmpty(data)) {
      localStorage.setItem(key, data);
    }
  };

  return { deleteCache, getCache, saveCache };
};
