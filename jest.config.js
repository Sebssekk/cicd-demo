/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Tells Jest to use ts-jest for .ts files
  preset: 'ts-jest',
  
  // Sets the environment to Node (critical for Express apps)
  testEnvironment: 'node',
  
  // Tells Jest where to look for test files
  testMatch: ['**/tests/**/*.test.ts'],
  
  // Clears mock calls and instances between every test
  clearMocks: true,
};