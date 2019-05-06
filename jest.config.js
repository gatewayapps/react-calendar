module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/tests/configureTests.ts'],
  testEnvironment: 'jsdom'
}
