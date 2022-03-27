module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:storybook/recommended"],
  parser: '@typescript-eslint/parser',
  globals: {
    React: true,
    Realm: true,
    JSX: true
  },
  rules: {
    'prefer-const': 'warn',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': ['warn', {
      allowExpressions: false,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: false
    }]
  },
  overrides: [{
    // enable the rule specifically for TypeScript files
    files: ['*.js', '*.jsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  }]
};