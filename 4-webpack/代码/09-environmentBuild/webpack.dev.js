const merge = require('webpack-merge'); //用于合并的方法
const common = require('./webpack.common.js');  //通用配置文件
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "development", //生产环境(treeShaking必须在生产环境下(会进行压缩), 且在package.json文件里面声明无副作用["sideEffects": false])
    devtool: "inline-source-map",   //定位错误(用于开发环境下)
    devServer: {
        contentBase: './dist',   //告诉web服务器在哪个文件夹下读取资源
        port: "8980",    //指定端口号
        host: "192.168.1.103",   //指定域名
        hot: true   //启动模块热更替(更新模块后, 可以接收到模块变化, 但不会刷新页面)
    },
    plugins: [
        new webpack.NamedModulesPlugin(),   //命名模块插件
        new webpack.HotModuleReplacementPlugin()    //模块热更替插件
    ]
})