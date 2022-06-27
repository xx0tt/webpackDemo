const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js', // 入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径 绝对路径
    filename: 'bundle.js', // 出口文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 插件是字段 plugins 里配置
      template: './public/index.html',
      filename: 'index.html', // 生成文件的名称
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 8080,
    open: true,
  },
}
