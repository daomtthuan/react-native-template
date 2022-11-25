module.exports = {
  root: true,

  env: {
    'es2021': true,
    'node': true,
    'react-native/react-native': true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['@typescript-eslint', 'react', 'react-native', 'prettier', 'jest'],

  extends: [
    '@react-native-community',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/jsx-runtime',
  ],

  rules: {
    'prettier/prettier': ['error'],
    'prefer-const': ['error'],
    'quote-props': ['error', 'consistent'],
    'object-curly-newline': ['error', { consistent: true }],
    'func-names': ['error', 'as-needed'],
    'no-console': ['error', { allow: ['error'] }],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
          FunctionExpression: true,
        },
      },
    ],
    'import/extensions': [
      'error',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
          mjs: 'never',

          json: 'always',
          hook: 'always',
          type: 'always',
          style: 'always',
          component: 'always',
        },
      },
    ],
  },
};
