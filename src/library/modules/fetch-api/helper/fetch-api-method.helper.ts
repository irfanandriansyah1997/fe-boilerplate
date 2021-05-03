import { AxiosRequestConfig } from 'axios';

import { IFetchAPIPromise } from '@/library/modules/fetch-api/interface';

import {
  generateRequestWithData,
  generateRequestWithoutData
} from './fetch-api-request.helper';

/**
 * Delete Request
 * @param {string} url - url api
 * @param {AxiosRequestConfig | undefined} config - axios request config
 * @returns {IFetchAPIPromise<Response>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.25
 */
export function Delete<Response>(
  url: string,
  config?: AxiosRequestConfig
): IFetchAPIPromise<Response> {
  return generateRequestWithoutData<Response>(`delete`)(url, config);
}

/**
 * Get Request
 * @param {string} url - url api
 * @param {AxiosRequestConfig | undefined} config - axios request config
 * @returns {IFetchAPIPromise<Response>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.25
 */
export function Get<Response>(
  url: string,
  config?: AxiosRequestConfig
): IFetchAPIPromise<Response> {
  return generateRequestWithoutData<Response>(`get`)(url, config);
}

/**
 * Post Request
 * @param {string} url - url api
 * @param {Parameter} data - data will send to api
 * @param {AxiosRequestConfig | undefined} config - axios request config
 * @returns {IFetchAPIPromise<Response>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.25
 */
export function Patch<Response, Parameter>(
  url: string,
  data: Parameter,
  config?: AxiosRequestConfig
): IFetchAPIPromise<Response> {
  return generateRequestWithData<Response, Parameter>(`patch`)(
    url,
    data,
    config
  );
}

/**
 * Post Request
 * @param {string} url - url api
 * @param {Parameter} data - data will send to api
 * @param {AxiosRequestConfig | undefined} config - axios request config
 * @returns {IFetchAPIPromise<Response>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.25
 */
export function Post<Response, Parameter>(
  url: string,
  data: Parameter,
  config?: AxiosRequestConfig
): IFetchAPIPromise<Response> {
  return generateRequestWithData<Response, Parameter>(`post`)(
    url,
    data,
    config
  );
}

/**
 * Put Request
 * @param {string} url - url api
 * @param {Parameter} data - data will send to api
 * @param {AxiosRequestConfig | undefined} config - axios request config
 * @returns {IFetchAPIPromise<Response>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.25
 */
export function Put<Response, Parameter>(
  url: string,
  data: Parameter,
  config?: AxiosRequestConfig
): IFetchAPIPromise<Response> {
  return generateRequestWithData<Response, Parameter>(`put`)(url, data, config);
}
