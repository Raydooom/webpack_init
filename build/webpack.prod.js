const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true  // 代码压缩
    }),

    // 编译前清空dist目录
    new CleanWebpackPlugin(['dist'], {
      "root": __dirname + "/../",// 一个根的绝对路径.
      "verbose": true,// 将log写到 console.
      "dry": false,// 不要删除任何东西，主要用于测试.
      "exclude": ["files", "to", "ignore"]//排除不删除的目录，主要用于避免删除公用的文件
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

  ]
})


