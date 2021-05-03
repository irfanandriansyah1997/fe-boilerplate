/* eslint-disable sort-exports/sort-exports */
// TODO: please disable sort exports for these files

/**
 * Verified Is Not Empty
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {unknown} param - param compare
 * @returns {boolean}
 * @since 2021.01.24
 */
export const VerifiedIsNotEmpty = (param: unknown): boolean =>
  [undefined, null, ``].filter((item: unknown) => param === item).length === 0;

/**
 * Verified Is Not Null
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {unknown} param - param compare
 * @since 2021.01.24
 */
export const VerifiedIsNotNull = (param: unknown): boolean =>
  [undefined, null].filter((item: unknown) => param === item).length === 0;

/**
 * Bulk Verified Is Not Empty
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {unknown[]} param - param compare
 * @since 2021.01.24
 * @returns {boolean}
 */
export const BulkVerifiedIsNotEmpty = (param: unknown[]): boolean =>
  param.filter((item) => !VerifiedIsNotEmpty(item)).length === 0;

/**
 * Bulk Verified Is Not Null
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {unknown[]} param - param compare
 * @since 2021.01.24
 * @returns {boolean}
 */
export const BulkVerifiedIsNotNull = (param: unknown[]): boolean =>
  param.filter((item) => !VerifiedIsNotNull(item)).length === 0;

/**
 * Check is number
 * @param {unknown} param - parameter to check
 * @return {boolean}
 * @since 2021.01.24
 */
export const IsNumber = (param: unknown): boolean =>
  typeof param === `number` || typeof param === `bigint`;

/**
 * Verified Key Is Available
 * @param {DefaultDynamicObject} obj
 * @param {string} key
 * @return {boolean}
 */
export const VerifiedKeyIsExist = (
  obj: Record<string, unknown> | any,
  key: string | undefined
): boolean => {
  try {
    if (key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }

    return false;
  } catch (e) {
    return false;
  }
};
