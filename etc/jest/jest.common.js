const path = require('path');

module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', '/etc', '/__test__/'],
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../../src'),
    path.join(__dirname)
  ],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy'
  },
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  rootDir: path.join(__dirname, '../..'),
  setupFilesAfterEnv: ['<rootDir>/etc/jest/setup-jest.js'],
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  verbose: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-runner-eslint/watch-fix',
    'jest-watch-select-projects'
  ]
};
