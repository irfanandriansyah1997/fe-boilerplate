/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

require('dotenv').config();
require('cypress-watch-and-reload/plugins');
const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  // copy any needed variables from process.env to config.env
  // eslint-disable-next-line no-param-reassign
  config.env = { ...config.env, ...(process.env || {}) };

  const options = {
    watchOptions: {},
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('./webpack.config')
  };

  on('file:preprocessor', webpack(options));

  // do not forget to return the changed config object!
  return config;
};
