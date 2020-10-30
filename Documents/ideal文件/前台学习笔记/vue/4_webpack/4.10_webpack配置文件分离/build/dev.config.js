// npm install webpack-merge --save-dev
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = webpackMerge(baseConfig, {
//   npm install webpack-dev-server@2.9.1 --save-dev
  devServer: {
    //为哪一个文件夹提供本地服务，寻找的是html文件的路径，默认根目录
    contentBase: "./",
    //页面是否实时刷新
    inline: true
    //webpack-dev-server --open 是在json文件中进行配置的
  }
})