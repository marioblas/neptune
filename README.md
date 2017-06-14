# Neptune

[![MIT License](https://img.shields.io/npm/l/ghooks.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/marioblas/neptune.svg?style=flat-square)](https://david-dm.org/marioblas/neptune)
[![devDependency Status](https://david-dm.org/marioblas/neptune/dev-status.svg?style=flat-square)](https://david-dm.org/marioblas/neptune?type=dev)

Another Meteor boilerplate with [React](https://github.com/facebook/react), [Redux](https://github.com/reactjs/redux), [Styled Components](https://github.com/styled-components/styled-components) & more...

## Quick start

```sh
$ meteor npm install
$ meteor npm start
```

## Scripts

> **Important**: prefix npm scripts with **meteor** for avoid performance & compatibility issues (eg: *meteor npm start*, read [this discussion](https://github.com/meteor/meteor/issues/4314)).

- `npm start` - start your meteor server with settings-development.json
- `npm start:prod` - same as `npm start` but *in production mode*
- `npm run lint -s` - lint all javascript files
- `npm run lint:fix -s` - lint all javascript files and autofix problems

> Note that *-s* option is a shortcut for *--loglevel=silent* that makes the log output a little tidier and hides npm errors if the script exits with an error status (non-zero exit code).

## Settings

Don't push keys in your code, push them in settings file.

- `settings-development.json` should only contain values used for **testing**.
- `settings-production.json` should only contain values used in **production**.

For security purposes `settings-production.json` is *ignored* to prevent from being stored into version control.

> Read [this article](http://joshowens.me/environment-settings-and-security-with-meteor-js) for more info about Meteor settings.

## Deployment

- **Now** (with [Meteor Now](https://github.com/jkrup/meteor-now))
- **Heroku** (with [Meteor Buildpack Horse](https://github.com/AdmitHub/meteor-buildpack-horse))
- [**Galaxy**](https://www.meteor.com/hosting)
- **Anywhere** (with [Meteor Up](https://github.com/zodern/meteor-up))

## License
MIT © [marioblas](https://github.com/marioblas)
