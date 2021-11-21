import { verifiedIsNotEmpty } from '@99/helper';

import { IResourcePayload, NullAble } from '../interface/general';

/**
 * Create Resource Data
 * @param {Promise<T>} promise - promise object
 * @returns {IResourcePayload<T>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export function createResource<T>(promise: Promise<T>): IResourcePayload<T> {
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
