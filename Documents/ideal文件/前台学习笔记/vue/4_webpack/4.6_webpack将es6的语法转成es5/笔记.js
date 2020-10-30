/**


运行一个 npm install babel-loader babel-core@7 babel-preset-es2015

在webpack.config.js中 配置loader

module: {
  rules: [
    {
    //匹配的是js文件
      test: /\.js$/,

    //表示在转换es6文件时候，排除 node_modules和bower_components文件的js文件转换
      exclude: /(node_modules|bower_components)/,

      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    }
  ]
}


 */