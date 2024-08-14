module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|jsx|js)$': 'babel-jest', 
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', 
    '^@/(.*)$': '<rootDir>/src/$1', 
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
