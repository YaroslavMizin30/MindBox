module.exports = {
  moduleNameMapper: {
    '@widgets/(.*)': '<rootDir>/src/widgets/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '^.+\\.(css)$': '<rootDir>/cssMock.js'
  },
  testEnvironment: 'jsdom'
};
