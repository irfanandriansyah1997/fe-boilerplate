module.exports = {
  ...require('./jest.common'),
  displayName: 'dom',
  setupFiles: [],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
    '!**/?(*.)+(server.spec|server.test).[jt]s?(x)'
  ]
};
