const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/index.js'),  // 多入口文件配置
		add: path.resolve(__dirname, '../src/add.js')
	}, // 入口
	output: {
		filename: '[name].bundle.js', // 打包后的文件，name对应 app、add
		path: path.resolve(__dirname, '..', 'dist')
	},

	// loader配置
	module: {
		rules: [{
			test: /\.css$/, // 正则匹配文件
			use: [
				'style-loader',
				'css-loader'
			]
		},
		{
			test: /\.(png|svg|jpg|gif)$/, // 图片文件loader
			use: ['file-loader']
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['file-loader']
		}
		]
	},

	plugins: [
		// 自动生成html文件插件
		new HtmlWebpackPlugin({
			title: 'Output Management',
			filename: 'index.html',
			inject: "body", // 注入静态资源位置，true或"body"注入body底部，"head"插入到head中，false不注入
			favicon: "", // favicon路径
			hash: true, // true|false，是否为所有资源添加webpack每次编译产生的唯一hash值
			xhtml: true, // link标签是否自动闭合
			showErrors: true, // true 是否将错误信息输出到html页面中
			// chunks:["app"], // 允许插入到模板中的一些chunk，默认全部
			// excludeChunks: ['app'], // 不允许插入的
			minify: false, // 传递 html-minifier 选项给 minify 输出，false就是不使用html压缩，具体参考html-minifier
		}),

		// 多文件配置，需要实例化多次
		// new HtmlWebpackPlugin({
		// 	template: 'src/html/index.html',
		// 	excludeChunks: ['list', 'detail']
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: 'list.html',
		// 	template: 'src/html/list.html',
		// 	thunks: ['common', 'list']
		// })
	]
}