module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwind/recommended',
  ],
  ignorePatterns: ['**/node_modules/**', '**/dist/**'],
  plugins: ['react', 'jsx-a11y', 'html', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': ['warn', { allow: ['warn', 'error', 'debug', 'table'] }],
    'prettier/prettier': ['error', { singleQuote: true, jsxSingleQuote: false, printWidth: 120, parser: 'babel-ts' }],
  },
};
