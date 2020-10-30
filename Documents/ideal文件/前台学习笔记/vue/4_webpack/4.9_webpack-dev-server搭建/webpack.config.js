const path = require("path");
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin');
module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },

//   npm install webpack-dev-server@2.9.1 --save-dev
  devServer: {
    //为哪一个文件夹提供本地服务，寻找的是html文件的路径，默认根目录
    contentBase: "./",
    //页面是否实时刷新
    inline: true
    //webpack-dev-server --open 是在json文件中进行配置的
  },
  //丑化
  plugins: [
    // npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
    new UglifyjsWebpackPlugin()
  ]


}