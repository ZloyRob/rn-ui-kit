/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js'),
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)',
  ],
  setupFilesAfterEnv: ['<rootDir>/__mocks__/globalMock.js'],
};
