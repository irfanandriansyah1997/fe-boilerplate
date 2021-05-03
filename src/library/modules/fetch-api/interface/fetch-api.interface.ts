import { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Promise Fetch API Response
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.25
 */
export type IFetchAPIPromise<T> = Promise<IFetchAPIResponse<T>>;

/**
 * Fetch API Response
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.25
 */
export interface IFetchAPIResponse<T> {
  additionalData: Omit<AxiosResponse<T>, 'data'>;
  data: T;
}

/**
 * Fetch With Data Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.05
 */
export type IFetchAPIWithData<Response, Parameter> = (
  url: string,
  data: Parameter,
  config?: AxiosRequestConfig
) => IFetchAPIPromise<Response>;

/**
 * Fetch With Data Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.05
 */
export type IFetchAPIWithoutData<Response> = (
  url: string,
  config?: AxiosRequestConfig
) => IFetchAPIPromise<Response>;
