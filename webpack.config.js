const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

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
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/, // 匹配所有的css文件
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/, // 匹配所有的css文件
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      //   {
      //     // webpack 4
      //     test: /\.(png|jpg|gif|jpeg)$/i,
      //     use: [
      //       {
      //         loader: 'url-loader',
      //         options: {
      //           limit: 8 * 1024,
      //         },
      //       },
      //     ],
      //   },
      {
        // webpack 5
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset',
        // type: 'asset/inline', // base64
        // type: 'asset/resource', // file
        generator: {
          filename: '[hash:6][ext]',
        },
      },

      //   {
      //     // webpack 5 iconfont
      //     test: /\.(eot|svg|ttf|woff|woff2)$/,
      //     type: 'asset/resource',
      //     generator: {
      //       filename: 'font-[name].[hash:6][ext]',
      //     },
      //   },
      {
        // webpack4 iconfont
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2 * 1024,
              name: '[name].[ext]',
              outputPath: 'lib/images/',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}
