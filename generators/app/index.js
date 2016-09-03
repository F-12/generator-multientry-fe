'use strict';
var yeoman = require('yeoman-generator');
let fs = require('fs');
/*
 * 创建一个多入口前端工程
 * @param {String} name 用于package.json中的name字段
 * @param {version} version 用于package.json中的version字段
 * @param {desc} desc 用于package.json中的desc字段.
 * @param {author} author 用于package.json中的author字段
 */
module.exports = yeoman.Base.extend({
  configuring() {
    this.log('configuring');
    if (!this.config.get('srcDirPath')) {
      this.config.set('srcDirPath', 'src');
    }
    if (!this.config.get('entryDir')) {
      this.config.set('entryDir', 'entry');
    }
    if (!this.config.get('pageDirPath')) {
      this.config.set('pageDirPath', 'page');
    }
    if (!this.config.get('webpack.entry.suffix')) {
      this.config.set('webpack.entry.suffix', '-entry');
    }
    if (!this.config.get('webpack.bundle.suffix')) {
      this.config.set('webpack.bundle.suffix', 'pack');
    }
    if (!this.config.get('webpack.bundle.distDir')) {
      this.config.set('webpack.bundle.distDir', 'build');
    }
  },
  prompting: function () {
    // Have Yeoman greet the user.
    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'name: '
    }, {
      type: 'input',
      name: 'version',
      message: 'version: ',
      default: '0.0.1'
    }, {
      type: 'input',
      name: 'desc',
      message: 'description: ',
      default: ''
    }, {
      type: 'input',
      name: 'author',
      message: 'author: '
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    const templates = {
      'package.json': this.props,
      'index.js': {},
      'webpack.config.js': {
        srcDirPath: this.config.get('srcDirPath'),
        entryDir: this.config.get('entryDir'),
        entrySuffix: this.config.get('webpack.entry.suffix'),
        distDir: this.config.get('webpack.bundle.distDir'),
        bundleSuffix: this.config.get('webpack.bundle.suffix')
      }
    };
    for (let key in templates) {
      if (templates.hasOwnProperty(key)) {
        this.fs.copyTpl(
          this.templatePath(key),
          this.destinationPath(key),
          templates[key]
        );
      }
    }
    return new Promise(resolve => fs.mkdir(this.destinationPath(this.config.get('srcDirPath')), resolve)).then(
      () => new Promise(resolve => fs.mkdir(this.destinationPath(`${this.config.get('srcDirPath')}/${this.config.get('entryDir')}`), resolve))
    ).then(
      () => new Promise(resolve => fs.mkdir(this.destinationPath(this.config.get('pageDirPath')), resolve))
    );
  },

  install: function () {
  }
});
