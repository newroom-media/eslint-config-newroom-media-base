# ESLint Plugin Newroom Media Base

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) as a basic version (without e.g. framework-specific use) for Newroom Media projects.

## Installation

```
$ npm install --save-dev @newroom-media/eslint-config-base
```


## Usage

After installing the `@newroom-media/eslint-config-base` package from [npm](https://www.npmjs.com/package/@newroom-media/eslint-config-base), you can specify the config in the [`extends`](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](https://eslint.org/docs/user-guide/configuring).

Example:
```js
{
  "extends": [
    // Additional per-project extensions...
    "@newroom-media/eslint-config-base"
  ],
  "rules": {
    // Additional per-project rules...
  }
}
```

### Note about this configuration

This configuration extends `eslint:recommended` and adds own rules to be compliant with the code style of Newroom Media projects.


## License

MIT © Newroom Media GmbH