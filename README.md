# financier

 > A web-based, offline-first, YNAB4 alternative.

[![Build Status](https://travis-ci.org/aeharding/financier.svg?branch=master)](https://travis-ci.org/aeharding/financier)
[![Coverage Status](https://coveralls.io/repos/github/aeharding/financier/badge.svg?branch=master)](https://coveralls.io/github/aeharding/financier?branch=master)
[![Docker automated build](https://img.shields.io/badge/docker-aeharding/financier-blue.svg)](https://hub.docker.com/r/aeharding/financier/)

Officially hosted at [https://financier.io](https://financier.io)

[Trello board](https://trello.com/b/bXcFuXrm)
 
Built with Angular 1 and PouchDB.

## Are you a user?

This page is for developers. If you need help with financier, check out [the wiki](https://github.com/aeharding/financier/wiki) or [the website](https://financier.io).

## Install

```sh
# clone it
npm install -g gulp bower
npm install
bower install
```

### Develop

```sh
gulp watch
```

### Run locally

```sh
gulp build
npm run-script docs # generate jsdoc documentation
node ./api
```

### Docs

[📗 Staging docs](https://staging.financier.io/docs)

Local docs would be `http://localhost:8070/docs`.

Generate with `npm run-script docs`.
