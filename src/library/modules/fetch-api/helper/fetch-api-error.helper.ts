import { AxiosError } from 'axios';

/**
 * Fetch API Error Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.25
 */
export const FetchApiErrorHelper = (error: AxiosError): Error => {
  if (error instanceof Error) {
    return error;
  }

  return new Error(`Unknown Error`);
};
