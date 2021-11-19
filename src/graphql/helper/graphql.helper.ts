import { verifiedIsNotEmpty } from '@99/helper';

import { appsCache } from '../../hooks/cache.hooks';
import { IGraphqlPayload } from '../interface';

/**
 * Use Query Helper
 * @param {string} query - raw query graphql
 * @param {Record<string, string>} variables - graphql parameter query
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
export async function getGraphqlQuery<T = any>(
  query: string,
  variables: Record<string, string>
): Promise<T> {
  const bodyPayload = JSON.stringify({
    query,
    variables
  });

  const { getCache, saveCache } = appsCache();

  const cache = await getCache(bodyPayload);

  if (verifiedIsNotEmpty(cache)) {
    return JSON.parse(cache as string) as T;
  }

  return fetch(`https://graphql-pokemon2.vercel.app`, {
    body: bodyPayload,
    headers: {
      'Content-Type': `application/json`
    },
    method: `POST`
  })
    .then((response): IGraphqlPayload<T> => response.json())
    .then(async ({ data, errors }) => {
      if (errors) {
        return Promise.reject(
          new Error(
            errors
              .map((e) => {
                if (e instanceof Error) {
                  return e.message;
                }

                return undefined;
              })
              .filter(verifiedIsNotEmpty)
              .join(`\n`)
          )
        );
      }

      if (data) {
        await saveCache(bodyPayload, JSON.stringify(data));

        return data;
      }

      return Promise.reject(new Error(`Not have any data anymore`));
    });
}
