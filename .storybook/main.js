module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  "addons": [
    "@storybook/addon-essentials",
    '@storybook/addon-interactions',
    "@storybook/addon-links",
    '@storybook/addon-a11y',
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
};
