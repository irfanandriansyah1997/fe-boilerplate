module.exports = {
  ...require('./jest.common'),
  displayName: 'dom',
  setupFiles: ['jest-localstorage-mock'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec).[jt]s?(x)',
    '!**/?(*.)+(server.spec|server).[jt]s?(x)'
  ],
  transformIgnorePatterns: [
    '<rootDir>/bower_components/',
    '<rootDir>/node_modules/'
  ]
};
