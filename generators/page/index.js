'use strict';
const yeoman = require('yeoman-generator');

class PageSubgen extends yeoman.Base {
  constructor(args, opts) {
    super(args, opts);
    this.argument('featureName', {
      required: true,
      type: String,
      default: 'demo'
    });
    this.argument('pageName', {
      required: true,
      type: String,
      default: 'demo'
    });
  }
  /*
   * 读取--config-file参数指定的config文件，解析该文件
   * 针对conditions的type进行处理，生成对应的html element
   */
  configuring() {
    this.config.defaults({
      'page.ext': '.html'
    });
  }
  writing() {
    const data = Object.assign({}, {
      pageName: this.pageName,
      featureName: this.featureName,
      config: this.config.getAll()
    });
    this.fs.copyTpl(
      this.templatePath('page.html'),
      this.destinationPath(`${this.config.get('pageDirPath')}/${this.featureName}/${this.pageName}${this.config.get('page.ext')}`),
      data
    );
    this.fs.copy(
      this.templatePath('page.js'),
      this.destinationPath(`${this.config.get('srcDirPath')}/${this.config.get('entryDir')}/${this.featureName}/${this.pageName}${this.config.get('webpack.entry.suffix')}.js`),
      data
    );
  }
}

module.exports = PageSubgen;
