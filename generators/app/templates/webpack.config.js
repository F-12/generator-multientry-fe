const fs = require('fs');
const path = require('path');
const glob = require('glob');
/*
 * 获取所有entry point
 *
 */
function entries(p) {
  const preLength = p.length;
  if (p.substr(-1) !== '/') p = p + '/';
  return glob.sync(p + '**/*<%=entrySuffix%>.js').reduce((prev, file) => {
    prev[file.substring(preLength, file.length - 3)] = file;
    return prev;
  }, {});
}
module.exports = {
  entry: entries('./<%=srcDirPath%>/<%=entryDir%>'),
  output: {
    path: __dirname + '/<%=distDir%>',
    publicPath: '/<%=distDir%>',
    filename: '[name]<%=bundleSuffix%>.js'
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {
        test: /\.(js|jsx|es6)$/,
        include: [path.resolve(__dirname, '<%=srcDirPath%>')],
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0']
        }
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  devtool: '#source-map'
};
