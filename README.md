# Neptune

[![MIT License](https://img.shields.io/npm/l/ghooks.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/marioblas/neptune.svg?style=flat-square)](https://david-dm.org/marioblas/neptune)
[![devDependency Status](https://david-dm.org/marioblas/neptune/dev-status.svg?style=flat-square)](https://david-dm.org/marioblas/neptune#info=devDependencies)

Another Meteor boilerplate with Mantra, React, CSS Modules & more

## Quick start

```sh
$ meteor npm install
$ meteor npm start
```

## Commands

> **Important**: prefix npm commands with **meteor** for avoid performance issues (eg: *meteor npm start*), read [this discussion](https://github.com/meteor/meteor/issues/4314).

- `npm start` - start your meteor server with settings-development.json
- `npm run lint -s` - lint all javascript files
- `npm run lint:fix -s` - lint all javascript files and autofix problems

> Note that *-s* option is a shortcut for *--loglevel=silent* that makes the log output a little tidier and hides npm errors if the script exits with an error status (non-zero exit code).

## Settings

Don't push keys in your code, push them in settings file.

- `settings-development.json` should only contain values used for **testing**.
- `settings-production.json` should only contain values used in **production**.

For security purposes `settings-production.json` is *ignored* to prevent from being stored into version control.

An example of production file with Kadira APM & Kadira Debug keys:
```json
{
  "kadira": {
    "appId": "<appId>",
    "appSecret": "<appSecret>",
    "debug": {
      "authKey": "<authKey>"
    }
  }
}
```

> Read [this article](http://joshowens.me/environment-settings-and-security-with-meteor-js) for more info about Meteor settings.

## License
MIT © [marioblas](https://github.com/marioblas)
