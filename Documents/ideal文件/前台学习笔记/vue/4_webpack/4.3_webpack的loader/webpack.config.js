const path=require("path");

module.exports={
  entry: "./src/main.js",
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"bundle.js"
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        // npm install --save-dev style-loader@0.23.1  版本问题，降低版本
        // npm install --save-dev css-loader@2.0.1 版本问题，降低版本
        // css配置从右往左进行识别，因此css-loader（进行css样式加载）放在style-loader（进行css样式页面显示渲染）后面进行配置
        use:['style-loader','css-loader']
      }
    ]
  }
}