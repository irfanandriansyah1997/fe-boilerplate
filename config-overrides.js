/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable require-jsdoc-except/require-jsdoc */

module.exports = {
  webpack(config) {
    config.plugins = [...config.plugins];

    return config;
  }
};
