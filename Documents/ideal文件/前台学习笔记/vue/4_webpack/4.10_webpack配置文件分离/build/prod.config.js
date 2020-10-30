
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin');


// npm install webpack-merge --save-dev  安装文件组合器
const webpackMerge=require('webpack-merge');
const baseConfig=require('./base.config.js')
module.exports=webpackMerge(baseConfig,{
  plugins: [
    // npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
    new UglifyjsWebpackPlugin()
  ]

})
