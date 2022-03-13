# TSDX React w/ Storybook User Guide

> This TSDX setup is meant for developing React component libraries (not apps!) that can be published to NPM. If you’re looking to build a React-based app, you should use `create-react-app`, `nextjs`, `gatsby`, or `react-static`.

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

## Commands

TSDX scaffolds your new library inside `/src`

The recommended workflow is to run TSDX in one terminal:

```bash
yarn start || npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

### Storybook

Run inside another terminal:

```bash
yarn start:sb
```

This loads the stories in `src` ending with the `.stories.tsx` file extension

> NOTE: Stories should reference the components as if using the library. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

To do a one-off build, use `yarn build` or `npm run build`

To run tests, use `yarn test` or `npm test`.

## Configuration

Code quality is set up for you with `eslint`, `prettier-eslint-config`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `yarn test` or `npm test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/src
  /Thing
    index.tsx
    thing.stories.tsx
    thing.test.tsx
/.storybook
  main.js
  preview.js
.gitignore
main.css
package.json
postcss.config.js
README.md
tailwind.config.js 
tsconfig.json
```

#### React Testing Library

React `react-testing-library` is setup and ready to go. Check the `src/Thing/thing.test.tsx` to see how to work with React Testing Library and Storybook in unison.

Using `@storybook/testing-react` you can use import Storybook stories as mocked components.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.


Alternatively, if you already have a git repo connected, you can set up continuous deployment with Netlify:

```bash
netlify init
# build command: yarn build && cd example && yarn && yarn build
# directory to deploy: example/dist
# pick yes for netlify.toml
```

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Working with styles via TailwindCSS

This project is setup using Tailwind so you can style all of your UI right on your JSX. See [TailwindCSS](https://tailwindcss.com/) for more details on modifications and their styles API.

I also enjoy using [Tailwind Cheatsheet](https://tailwindcomponents.com/cheatsheet/).

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).

An alternative to fixing this problem would be to remove aliases altogether and define the dependencies referenced as aliases as dev dependencies instead. [However, that might cause other problems.](https://github.com/palmerhq/tsdx/issues/64)
