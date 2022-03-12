module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwind/recommended',
  ],
  plugins: ['jsx-a11y', 'html', 'react-hooks', '@typescript-eslint', 'prettier'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'prettier/prettier': ['error', { singleQuote: true, jsxSingleQuote: false, printWidth: 120, parser: 'babel-ts' }],
    'no-console': ['warn', { allow: ['warn', 'error', 'debug', 'table'] }],
    '@typescript-eslint/ban-ts-comment': 1,
  },
};
