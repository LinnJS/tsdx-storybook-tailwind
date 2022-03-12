module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['jsx-a11y', 'react-hooks', '@typescript-eslint'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': ['warn', { allow: ['warn', 'error', 'debug', 'table'] }],
    '@typescript-eslint/ban-ts-comment': 1,
    'quotes': [
      'error',
      'single',
    ],
  },
};
