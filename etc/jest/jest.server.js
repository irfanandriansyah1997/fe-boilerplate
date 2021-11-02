module.exports = {
  ...require('./jest.common'),
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/*.server.spec.(js|ts|tsx|jsx)']
};
