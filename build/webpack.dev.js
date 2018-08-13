const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  // 多模式查看：https://webpack.docschina.org/configuration/devtool
  devtool: 'cheap-eval-source-map', // 将编译后的代码映射回原始源代码，生产环境不设置生产source-map

  // 浏览器自动刷新配置
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dist'),
    compress: true,  // 一切服务都启用 gzip 压缩
    port: 8080
  },
})


