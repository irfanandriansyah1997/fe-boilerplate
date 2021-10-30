/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */

import worker from 'workerize?name=[name].[contenthash:8]!./city.helper';

import * as modules from './city.helper';

export const { getCityItems } = worker<typeof modules>();
