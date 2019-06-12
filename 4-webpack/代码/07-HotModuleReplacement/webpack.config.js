const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");   //清理dist目录下的其他遗留文件(注意中文文档用法未更新)
const webpack = require('webpack');

module.exports = {
    devtool: "inline-source-map",   //定位错误(用于开发环境下)
    entry: {    //两个入口文件
        app: "./src/index.js"
    },
    devServer: {
        contentBase: './dist',   //告诉web服务器在哪个文件夹下读取资源
        port: "8980",    //指定端口号
        host: "192.168.1.103",   //指定域名
        hot: true   //启动模块热更替(更新模块后, 可以接收到模块变化, 但不会刷新页面)
    },
    output: {
        filename: "[name].bundle.js",  //输出的文件名(app.bundle.js, print.bundle.js)
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ //会对应生成index.html文件, 并根据该配置文件引入对应的js文件
            title: "HMR"
        }),
        new webpack.NamedModulesPlugin(),   //命名模块插件
        new webpack.HotModuleReplacementPlugin()    //模块热更替插件
    ],
    module: {
        rules: [
            {
                test: /\.css$/, //匹配css的正则表达式
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/, //匹配图片的正则表达式
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}