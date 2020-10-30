const path = require("path");

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },

  /*
  runtime-only 代码中，不可以有任何的template
  runtime-compiler 代码中，可以有template,因为有compiler可以用于编译template
  我们在 npm install vue 安装好vue，再 npm run build 打包以后，默认选中的是runtime-only 模式，所以需要手动配置：resolve中的alias，选择本地的vue.esm.js文件
  vue.esm.js文件中包含了runtime-complier的相关处理代码
  */
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  //  安装vue相关的编译组件 npm install vue-loader@13.0.0 vue-template-compiler --save-dev  识别vue文件
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}