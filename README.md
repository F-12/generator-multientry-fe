# generator-multientry-fe [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A generator for multi entry web front end project using vue and webpack

## Installation

First, install [Yeoman](http://yeoman.io)

```bash
npm install -g yo
npm install -g generator-multientry-fe
```

Then, install generator-multientry-fe. You can choose the global installation way or locally installation way.

## Usage

Generate your new project:

```bash
mkdir your-project-dir
cd your-project-dir
yo multientry-fe
```

Now you have a front end project within which uses webpack to make bundle and vuejs to promote your web development effiency.

If you want to start a new app in this project, just use yo command:

```bash
yo multientry-fe:page feature-name new-page-name
```
This will generate a html file and related webpack entry js file according to your configuration in .yo-rc.json file for you.

## TODO

- [ ] support for new vue component npm package development and publish

## License

MIT © [f-12](github.com/f-12)


[npm-image]: https://badge.fury.io/js/generator-multientry-fe.svg
[npm-url]: https://npmjs.org/package/generator-multientry-fe
[travis-image]: https://travis-ci.org/F-12/generator-multientry-fe.svg?branch=master
[travis-url]: https://travis-ci.org/F-12/generator-multientry-fe
[daviddm-image]: https://david-dm.org/F-12/generator-multientry-fe.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/F-12/generator-multientry-fe
[coveralls-image]: https://coveralls.io/repos/F-12/generator-multientry-fe/badge.svg
[coveralls-url]: https://coveralls.io/r/F-12/generator-multientry-fe
