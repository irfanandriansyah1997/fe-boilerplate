/**
 * Cache Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
export interface ICacheHooks {
  deleteCache(key: string): Promise<void>;
  getCache(key: string): Promise<string | undefined>;
  saveCache(key: string, data: string): Promise<void>;
}
