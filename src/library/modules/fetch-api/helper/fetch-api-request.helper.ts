/* eslint-disable sort-exports/sort-exports */
// TODO: will disable sort-exports for this file

import axios, { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios';

import {
  IFetchAPIPromise,
  IFetchAPIResponse
} from '@/library/modules/fetch-api/interface';

import { FetchApiErrorHelper } from './fetch-api-error.helper';

/**
 * Request API
 * @param {AxiosPromise<Response>} instance - instance include promise from axios
 * @returns {Promise<Response>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.25
 */
function request<Response>(
  instance: AxiosPromise<Response>
): IFetchAPIPromise<Response> {
  return new Promise<IFetchAPIResponse<Response>>((resolve, reject) => {
    instance
      .then(({ data, ...res }) => resolve({ additionalData: res, data }))
      .catch((err: AxiosError) => {
        reject(FetchApiErrorHelper(err));
      });
  });
}

/**
 * Generate Request Without Data
 * @param {'get' | 'delete'} method - method name if we use axios default e.g get, delete func
 * @returns {Promise<Response>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.25
 */
export function generateRequestWithoutData<Response>(method: 'get' | 'delete') {
  return (
    url: string,
    config?: AxiosRequestConfig
  ): IFetchAPIPromise<Response> => {
    const promiseInstance: AxiosPromise<Response> = axios[method](url, config);

    return request<Response>(promiseInstance);
  };
}

/**
 * Generate Request With Data
 * @param {'post' | 'put' | 'patch'} method - method name if we use axios default e.g get, delete func
 * @returns {Promise<Response>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.25
 */
export function generateRequestWithData<Response, Parameter>(
  method: 'post' | 'put' | 'patch'
) {
  return (
    url: string,
    data: Parameter,
    config?: AxiosRequestConfig
  ): IFetchAPIPromise<Response> => {
    const promiseInstance: AxiosPromise<Response> = axios[method](
      url,
      data,
      config
    );

    return request<Response>(promiseInstance);
  };
}
