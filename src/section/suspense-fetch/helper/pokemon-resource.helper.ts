import { verifiedIsNotEmpty } from '@99/helper';

import { NullAble } from '../../../interface/general';
import { IResourcePart3 } from '../interface/part-3.interface';

/**
 * Create Resource
 * @param {Promise<T>} promise - promise object
 * @returns {IResourcePart3<T>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export function createResource<T>(promise: Promise<T>): IResourcePart3<T> {
  let status: 'pending' | 'resolved' | 'rejected' = `pending`;
  let errorResult: NullAble<Error>;
  let resolveResult: NullAble<T>;

  const promiseResult = promise.then(
    (resolved) => {
      status = `resolved`;
      resolveResult = resolved;
    },
    (error) => {
      status = `rejected`;

      if (error instanceof Error) {
        errorResult = error;
      } else {
        errorResult = new Error(`unknown error`);
      }
    }
  );

  /**
   * Read Promise
   * @returns {T}
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.11.19
   */
  const read = (): T => {
    switch (status) {
      case `pending`:
        throw promiseResult;

      case `rejected`:
        throw errorResult;

      case `resolved`: {
        if (verifiedIsNotEmpty(resolveResult)) {
          return resolveResult as T;
        }

        throw new Error(`Payload data is undefined`);
      }

      default:
        throw new Error(`Imposible will be invoked`);
    }
  };
  return {
    read
  };
}
