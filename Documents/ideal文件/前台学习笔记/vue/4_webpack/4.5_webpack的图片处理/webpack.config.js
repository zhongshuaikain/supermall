const path = require("path");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    //当图片大于limit时，会被打包成文件到dist目录下发布，而publicPath表示默认在原本的图片路径前面加一个dist路径，使图片打包到dist目录下后，依旧能运行显示
    publicPath:"dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            // npm install url-loader@1.1.2 --save-dev
            loader: 'url-loader',
            options: {
              //当加载的图片大小，小于limit时，会将图片编译成base64字符串形式
              //当加载的图片大小，大于limit时，需要使用file-loader(3.0.1版本)模块进行加载
              limit: 10000,
              //规范生成打包图片的命名，使打包后的图片统一放到img文件夹下，用 名字+八位哈希值+扩展名 的方式命名
              name:"img/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  }
}