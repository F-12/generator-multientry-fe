'use strict';
var yeoman = require('yeoman-generator');
let fs = require('fs');

module.exports = yeoman.Base.extend({
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
      'webpack.config.js': {},
      '.yo-rc.json': {}
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
    fs.mkdirSync(this.destinationPath('src'));
    fs.mkdirSync(this.destinationPath('src/entry'));
    fs.mkdirSync(this.destinationPath('page'));
  },

  install: function () {
  }
});
