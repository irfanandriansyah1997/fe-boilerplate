/* eslint-disable */
const path = require('path');
const compressionPlugin = require("compression-webpack-plugin");

module.exports = {
  webpack: function(config, env) {
    config.plugins = [
      ...config.plugins,
      new compressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(css|js|svg|ttf|eot|woff|woff2)$/,
        minRatio: Number.MAX_SAFE_INTEGER,
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false
      })
    ];

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        // Library Directory
        '@/helper': path.resolve(__dirname, './src/library/helper/'),
        '@/modules': path.resolve(__dirname, './src/library/modules/'),

        // Main Directory
        '@/assets': path.resolve(__dirname, './src/assets/'),
        '@/library': path.resolve(__dirname, './src/library/'),
        '@/pages': path.resolve(__dirname, './src/pages/'),
        '@/routing': path.resolve(__dirname, './src/routing/'),
        '@/style': path.resolve(__dirname, './src/style/'),

        // Base Directory
        '@': path.resolve(__dirname, './src/'),
      }
    };

    return config;
  },
  jest: function(config) {
    config.moduleNameMapper = {
      '@/scss/(.*)$': '<rootDir>/src/core/client/asset/style/scss/$1',
      '@/helper/(.*)$': '<rootDir>/src/library/helper/$1',
      '@/helper': '<rootDir>/src/library/helper/index.ts',
      '@/modules/(.*)$': '<rootDir>/src/library/modules/$1',
      '@/assets/(.*)$': '<rootDir>/src/assets/$1',
      '@/library/(.*)$': '<rootDir>/src/library/$1',
      '@/pages/(.*)$': '<rootDir>/src/pages/$1',
      '@/routing/(.*)$': '<rootDir>/src/routing/$1',
      '@/style/(.*)$': '<rootDir>/src/style/$1',
      '@/(.*)$': '<rootDir>/src/$1'
    }

    return config;
  },

}


