# Configuration

## Environments

To add an environment configuration file, just create a new `config.ENV.json` file.
To use the new environment, you must create the related npm script.

##### e.g for an `integration` environment:

- Create the `src/config/config.int.json` file
- Create the related scripts in `package.json`:

```json
"scripts": {
  "build:int": "rimraf dist && webpack --bail --progress --profile --env int",
  "serve:int": "webpack-dev-server --history-api-fallback --inline --progress --hot --env int"
}
```

By default, the application is launched in `dev` environment.

